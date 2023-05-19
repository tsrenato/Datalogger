import axios from 'axios';
import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [dataloggers, setDataloggers] = useState([]);
  const service = {
    url: 'http://localhost',
    port: 8000,
  }

  const _signIn = async credentials => {
    try {
      const resp = await axios.post(service.url + ':' + service.port + '/sign-in', credentials);
      Cookies.set('jwt', resp.data);
      window.location.href = 'http://localhost:8000/dashboard'
    } catch (err) {
      toast.error('Falha ao tentar realizar o login. Verifique suas credenciais e tente novamente.');
    }
  }

  const _fetchDataloggers = async () => {
    try {
      const resp = await axios.get(service.url + ':' + service.port + '/api/dataloggers');
      setDataloggers(resp.data);
    } catch (err) {
      toast.error('Falha ao consultar os dataloggers.');
    }
  }

  return (
    <AppContext.Provider
      value={{
        service,
        user,
        setUser,
        dataloggers,
        getDataloggers: _fetchDataloggers,
        app: {
          login: _signIn,
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}