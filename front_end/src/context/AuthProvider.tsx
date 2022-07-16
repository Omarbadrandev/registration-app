import React from 'react';
import { createContext, useState } from 'react';
import { Auth } from '../types';

//https://dev.to/alexander7161/react-context-api-with-typescript-example-j7a
type AuthContextState = {
    auth: Auth;
    setAuth: React.Dispatch<React.SetStateAction<Auth>>;
};

const AuthContextDefaultValues: AuthContextState = {
    auth: {} as Auth,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setAuth: () => {}
};

const AuthContext = createContext<AuthContextState>(AuthContextDefaultValues);

export const AuthProvider = ({ children }: any) => {
    const [auth, setAuth] = useState<Auth>({} as Auth);
    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
