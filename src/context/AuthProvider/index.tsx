import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {

    useEffect(() => {
        const user = getUserLocalStorage()

        if(user){
            setUser(user);
        }
    }, [])

    const [user, setUser] = useState<IUser | null>();

    async function authenticated(cpf: string, senha: string) {
        const response = await LoginRequest(cpf, senha);

        const payload = {token: response.token}
        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout() {
        setUser(null);
        setUserLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...user, authenticated, logout}}>
            {children}
        </AuthContext.Provider>
    )

}