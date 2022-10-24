import { Api } from "../../services/api";
//import { IUserRegister } from "./types";

//export async function RegisterRequest (nome, endereco, cpf, email, senha){
export async function RegisterRequest (nome: string, endereco: string, cpf: string, email: string, senha: string){
    try {
        const request = await Api.post("/usuarios", {nome, endereco, cpf, email, senha})
        return request.data
    } catch (error) {
        return null;
    }
}