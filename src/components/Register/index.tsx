import { useNavigate } from "react-router-dom"
import { RegisterRequest } from "../../context/RegisterProvider/util";
import styles from './register.css'

import {
  Button,
  Checkbox,
  Form,
  Input,
  message
} from 'antd';

export const Register = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 4 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        //span: 24,
        //offset: 0,
        span: 12,
        offset: 6
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const navigate = useNavigate();
  async function onRegister(values: { nome: string, endereco: string, cpf: string, email: string, senha: string }) {
    try {
      RegisterRequest(values.nome, values.endereco, values.cpf, values.email, values.senha)
      message.info("Sucesso ao cadastrar")
      navigate('/login')
    } catch (error) {
      message.error('Erro ao realizar o registro!')
    }
  }

  return (
    <div >
      
      <Form
        className={styles} id="formularioRegistro"
        {...formItemLayout}
        name="register"
        onFinish={onRegister}
        scrollToFirstError
      >
        <h2>Registro de Usuário</h2>
        <Form.Item
          name="nome"
          label="Nome Completo"
          rules={[
            {
              required: true,
              message: 'Por favor insira nome!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="endereco"
          label="Endereço"
          rules={[
            {
              required: true,
              message: 'Por favor insira o endereço!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="cpf"
          label="CPF"
          rules={[{ required: true, message: 'Por favor insira seu CPF/CNPJ!', whitespace: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="senha"
          label="Senha"
          rules={[
            {
              required: true,
              message: 'Por favor insira sua senha!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Você não aceitou os termos!')),
            },
          ]}
        >
          <Checkbox>
            Eu li os <a href="">termos!</a>
          </Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>

  );
};