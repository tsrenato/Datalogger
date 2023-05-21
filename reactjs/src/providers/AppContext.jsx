import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [dataloggers, setDataloggers] = useState([]);
  const _navigate = useNavigate();

  axios.defaults.baseURL = 'http://localhost:8000';
  const _axios = axios.create();

  _axios.interceptors.request.use(request => {
    let token = Cookies.get('token');
    if (!token) throw new Error('Authorization token missing.');
    request.headers.Authorization = 'Bearer ' + token;
    return request;
  }, error => {
    _signOut();
    return Promise.reject(error);
  });


  _axios.interceptors.response.use(response => {
    return response;
  }, error => {
    return Promise.reject(error);
  });


  const _signIn = async credentials => {
    try {
      const resp = await axios.post('/sign-in', credentials);
      Cookies.set('token', resp.data);
      await _isLoggedIn();
    } catch (err) {
      console.log(err);
      toast.error('Falha ao tentar realizar o login. Verifique suas credenciais e tente novamente.');
    }
  }

  const _signOut = async () => {
    _navigate('/');
    Cookies.remove('token');
  }

  const _isLoggedIn = async () => {
    try {
      const resp = await _axios.get('/validate');
      setUser(resp.data);
      _navigate('/dashboard');
    } catch (err) {
      _navigate('/');
    }
  }

  const _fetchDataloggers = async () => {
    try {
      if (!Cookies.get('token')) return;
      const resp = await _axios.get('/api/dataloggers');
      setDataloggers(resp.data);
    } catch (err) {
      toast.error('Falha ao consultar os dataloggers.');
    }
  }

  useEffect(() => {
    _isLoggedIn();
    return () => {
      let ac = new AbortController();
      ac.abort();
    }
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        dataloggers,
        getDataloggers: _fetchDataloggers,
        axios: _axios,
        app: {
          login: _signIn,
          logout: _signOut,
        },
        router: {
          navigate: _navigate,
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}