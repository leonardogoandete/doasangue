import { Button, Col, Form, Input, Row, message } from "antd"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider/useAuth"

export const ProtectedLayout = ({children}: {children: JSX.Element}) => {
    const navigate = useNavigate();
    const auth = useAuth()

    if(!auth.cpf){
        return <h1> Voce não tem acesso!</h1>;
    }

    
    async function onClique (){
        try {
            auth.logout()
            console.log("Deslogou-se")
            navigate('/')
        } catch (error) {
            message.error('CPF ou senha invalidos!')
        }
    }


    if(auth.cpf){
        return <div>
                <h2>Olá voce logou-se</h2>
                <Form onClick={ onClique }>
                    <Form.Item wrapperCol={{offset:8, span:16}}>
                        <Button type="primary" htmlType='submit'>
                            Logoff
                        </Button>                        
                    </Form.Item>
                </Form>
                </div>
    }
    return children;
}