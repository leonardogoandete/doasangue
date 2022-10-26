import { useContext } from "react"
import { AuthContext } from "."

export const useAuthInstituicao = () => {
    const context = useContext(AuthContext)

    return context;

}