import { Button, Col, Form, Input, Row, message } from "antd"
import { useNavigate } from "react-router-dom"
import {  LockOutlined, UserOutlined  } from '@ant-design/icons';
import { useAuth } from "../../context/AuthProvider/useAuth"
import styles from './login.css'

export const Login = () => {
    const auth  = useAuth();
    const navigate = useNavigate();
    async function onFinish (values: {cpf: string, senha: string}){
        try {
            await auth.authenticated(values.cpf, values.senha)
            message.info('Login realizado com sucesso!')
            navigate('/profile')
        } catch (error) {
            message.error('CPF ou senha invalidos!')
        }
    }

    return(
        <div
        className={styles} id="formulario"
        style={{
            padding:150, 
            width: 1905, 
            top: -290
        }}
        >
        <Row
            className="formulario-row"
            justify="center"
            align="middle"
            style={{
                height: '100vh'
            }}
        >
            <Col span={30}>
                <Form
                    labelCol={{span: 6}}
                    wrapperCol={{span: 16}}
                    onFinish={onFinish}
                >
                    <Form.Item
                    label='CPF'
                    name='cpf'
                    rules={[
                        {
                          required: true,
                          message: 'Por favor insira seu CPF!',
                        },
                      ]}
                    >
                        <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item
                    label='Senha'
                    name='senha'
                    rules={[
                        {
                          required: true,
                          message: 'Por favor insira sua senha!',
                        },
                      ]}
                    >
                        <Input.Password 
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        />
                    </Form.Item>

                    <Form.Item wrapperCol={{offset:8, span:16}}>
                        <Button type="primary" htmlType='submit' className="login-form-button">
                            Log In
                        </Button>  Or <a href="/register">register now!</a>                      
                    </Form.Item>
                </Form>
            </Col>

        </Row>
        </div>
    )
}