export interface IUser{
    cpf?: string;
    token?: string;
}

export interface IContext extends IUser{
    authenticated: (cpf: string, senha: string) => Promise<void>
    logout: () => void
}

export interface IAuthProvider {
    children: JSX.Element
}