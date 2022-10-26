import { useContext } from "react"
import { AuthContext } from "."

export const useAuthUsuario = () => {
    const context = useContext(AuthContext)

    return context;

}