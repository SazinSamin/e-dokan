'use client';

const { createContext, useState } = require("react");

export const AuthenticationContext = createContext();

const AuthenticationProvider = ({children}) => {

  const [ isAuthenticate, setIsAuthenticate ] = useState(false);

  return <AuthenticationContext.Provider value={{isAuthenticate, setIsAuthenticate}}>
    {children}
  </AuthenticationContext.Provider>
}


export default AuthenticationProvider;