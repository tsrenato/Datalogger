import axios from 'axios';
import React, { createContext, useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [dataloggers, setDataloggers] = useState([]);
  const service = {
    url: 'http://localhost',
    port: 8000,
  }

  const _fetchDataloggers = async () => {
    try {
      const resp = await axios.get(service.url + ':' + service.port + '/api/dataloggers');
      setDataloggers(resp.data);
    } catch (err) {
      toast.error('Falha ao consultar os dataloggers.');
    }
  }

  useEffect(() => console.log(dataloggers), [dataloggers]);

  return (
    <AppContext.Provider
      value={{
        service,
        user,
        setUser,
        dataloggers,
        getDataloggers: _fetchDataloggers,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}