import { Api } from "../../services/api";
import { IInstituicao } from "./types";

export function setInstituicaoLocalStorage(instituicao: IInstituicao | null){
    localStorage.setItem("u", JSON.stringify(instituicao));
}

export function getInstituicaoLocalStorage(){
    const json = localStorage.getItem('i');

    if(!json) {
        return null;
    }

    const instituicao = JSON.parse(json);

    return instituicao ?? null;
}

export async function LoginRequest (cnpj: string, senha: string){
    try {
        const request = await Api.post("/instituicoes/login", {cnpj, senha})
        return request.data
    } catch (error) {
        return null;
    }
}