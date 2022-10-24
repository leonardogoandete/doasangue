export interface IPostagem{
    id?: number;
    mensagem?: string;
    instituico?: Instituico;
}

export interface Instituico {
    nome: string;
}
/*
export interface IContext extends IUserRegister{
    authenticated: (cpf: string, senha: string) => Promise<void>
    logout: () => void
}
*/
export interface IPostagemProvider {
    children: JSX.Element
}

// nome, endereco, cpf, email, senha