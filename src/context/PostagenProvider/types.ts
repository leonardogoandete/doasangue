export interface IPostagem{
    id?: number;
    mensagem?: string;
    instituico?: Instituico;
}

export interface Instituico {
    nome: string;
}

export interface IPostagemProvider {
    children: JSX.Element
}