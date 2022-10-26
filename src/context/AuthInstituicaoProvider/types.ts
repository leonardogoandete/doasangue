export interface IInstituicao{
    cnpj?: string;
    token?: string;
}

export interface IContext extends IInstituicao{
    authenticated: (cnpj: string, senha: string) => Promise<void>
    logout: () => void
}

export interface IAuthProvider {
    children: JSX.Element
}