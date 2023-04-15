import React, { createContext, useState } from 'react'

export const AppContext = createContext({});

export function AppContextProvider({children}) {
    const [user, setUser] = useState({});
  return (
    <AppContext.Provider
        value={{
            user,
            setUser,
        }}
    >
        {children}
    </AppContext.Provider>
  )
}