import React, {createContext, useEffect, useState} from "react";
import { IAuthProvider, IContext, IInstituicao } from "./types";
import { getInstituicaoLocalStorage, LoginRequest, setInstituicaoLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {

    useEffect(() => {
        const instituicao = getInstituicaoLocalStorage()

        if(instituicao){
            setInstituicao(instituicao);
        }
    }, [])

    const [instituicao, setInstituicao] = useState<IInstituicao | null>();

    async function authenticated(cnpj: string, senha: string) {
        const response = await LoginRequest(cnpj, senha);

        const payload = {token: response.token}
        setInstituicao(payload);
        setInstituicaoLocalStorage(payload);
    }

    function logout() {
        setInstituicao(null);
        setInstituicaoLocalStorage(null);
    }

    return(
        <AuthContext.Provider value={{...instituicao, authenticated, logout}}>
            {children}
        </AuthContext.Provider>
    )

}