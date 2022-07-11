import React from "react"
import { createContext, useState } from "react"

//https://dev.to/alexander7161/react-context-api-with-typescript-example-j7a
type AuthContextState = {
  auth: {}
  setAuth: React.Dispatch<React.SetStateAction<{}>>
}

const AuthContextDefaultValues: AuthContextState = {
  auth: {},
  setAuth: () => {}
}

const AuthContext = createContext<AuthContextState>(AuthContextDefaultValues)

export const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState({})

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
