import React, { createContext, useState } from 'react'

export const AppContext = createContext({});

export function AppContextProvider({ children }) {
  const [user, setUser] = useState({});
  const service = {
    url: 'http://localhost',
    port: 3000,
  }
  return (
    <AppContext.Provider
      value={{
        service,
        user,
        setUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}