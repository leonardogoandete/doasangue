export interface IUserRegister{
    nome?: string;
    endereco?: string;
    cpf?: string;
    email?: string;
    senha?: string;
}
/*
export interface IContext extends IUserRegister{
    authenticated: (cpf: string, senha: string) => Promise<void>
    logout: () => void
}
*/
export interface IUserRegisterProvider {
    children: JSX.Element
}

// nome, endereco, cpf, email, senha