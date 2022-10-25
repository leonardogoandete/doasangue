export interface IUserRegister{
    nome?: string;
    endereco?: string;
    cpf?: string;
    email?: string;
    senha?: string;
}

export interface IUserRegisterProvider {
    children: JSX.Element
}
