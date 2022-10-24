//import { Button, Col, Form, Input, Row, message } from "antd"
import { useNavigate } from "react-router-dom"
import { RegisterRequest } from "../../context/RegisterProvider/util";
import { IUserRegister } from "../../context/RegisterProvider/types";

import {
    Button,
    Checkbox,
    Form,
    Input,
    message
  } from 'antd';
  import React, { useState } from 'react';
  


export const Register = () => {    
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
  
     const navigate = useNavigate();
     async function onRegister (values: { nome: string, endereco: string, cpf:string, email: string, senha: string }){
     //async function onRegister (){
        try {
          RegisterRequest(values.nome,values.endereco,values.cpf,values.email,values.senha)
          message.info("Sucesso ao cadastrar")
          navigate('/login')
        } catch (error) {
            message.error('Erro ao realizar o registro!')
        }
    }

            return (
              <div
              style={{
                padding:300, 
                width: 1500, 
                top: -290
                }}
              >
              <Form
                {...formItemLayout}
                name="register"
                onFinish={onRegister}
                scrollToFirstError
              >
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
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                    },
                  ]}
                  {...tailFormItemLayout}
                >
                  <Checkbox>
                    Eu li os <a href="">termos!</a>
                  </Checkbox>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>
              </div>
            );
          };