import {
    LockOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import {
    LoginForm,
    ProFormText,
  } from '@ant-design/pro-components';
import { Tabs, message } from 'antd';
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useAuth } from "../../context/AuthProvider/useAuth"
  
type LoginType = 'user' | 'instituicao';
 
  
  export const Login = () => {
    const [loginType, setLoginType] = useState<LoginType>('user');    
    const auth  = useAuth();
    const navigate = useNavigate();
    
    async function onFinish (values: {cpf: string, cnpj: string, senha: string}){
        const cnpj = values.cnpj;
        const cpf = values.cpf;
        const senha = values.senha;
        
        if(cnpj == null){
            try {
                console.log("É um usuario: " + cpf);
                await auth.authenticated(cpf, senha)
                message.info('Login realizado com sucesso!')
                navigate('/profile')
            } catch (error) {
                message.error('CPF ou senha invalidos!')
            }
        }else{
            console.log(senha)
            try {
                console.log("É uma instituicao: " + cnpj);
                await auth.authenticated(cnpj, senha)
                message.info('Login realizado com sucesso!')
                navigate('/profile')
            } catch (error) {
                message.error('CNPJ ou senha invalidos!')
            }
        }
    }
    

    return (
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          title="Login"
          subTitle="autentique-se"
          onFinish={onFinish}

        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'user'} tab={'Usuario'} />
            <Tabs.TabPane key={'instituicao'} tab={'Instituicao'} />
          </Tabs>
          {loginType === 'user' && (
            <>
              <ProFormText
                name="cpf"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'CPF'}
                rules={[
                  {
                    required: true,
                    message: 'Digite seu CPF!',
                  },
                ]}
              />
              <ProFormText.Password
                name="senha"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'Senha'}
                rules={[
                  {
                    required: true,
                    message: 'Digite sua senha!',
                  },
                ]}
              />
            <div
                style={{
                marginBlockEnd: 24,
                }}
            >
                <a
                style={{
                    float: 'right',
                    padding: 0
                }}
                
                >
                Registre-se
                </a>
            </div>
            </>
          )}
          {loginType === 'instituicao' && (
            <>
            <ProFormText
              name="cnpj"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'CNPJ'}
              rules={[
                {
                  required: true,
                  message: 'Digite seu CNPJ!',
                },
              ]}
            />
            <ProFormText.Password
              name="senha"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'Senha'}
              rules={[
                {
                  required: true,
                  message: 'Digite sua senha!',
                },
              ]}
            />
          </>
          )}
        </LoginForm>
      </div>
    );
  };