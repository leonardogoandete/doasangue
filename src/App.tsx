import { AuthProvider } from './context/AuthUserProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login/index'
import { Register } from './components/Register'
import { Postagem } from './components/Postagem'
import { Agendamento }from './components/Agendamento'
//import './App.css'
import 'antd/dist/antd.css';
import './App.css'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import logo from "../src/assets/doasanguepoa/png/logo-no-background.png"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' 
          element={
            <ProtectedLayout>
              <h2>Olá voce logou-se</h2>
            </ProtectedLayout>
          } />
          <Route path='/postagens' element={<Postagem />} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/register' element={<Register />} /> 
          <Route path='/agendamento' element={<Agendamento />} /> 
        </Routes>      
      </BrowserRouter>
    </AuthProvider>
    
  )
<<<<<<< HEAD
}
=======
        }
>>>>>>> parent of a585b04... trocado exibição do front

  /*
  const { Header, Content, Footer, Sider } = Layout;
  
  useEffect(() => {
    // just for sample
    // please use dva dispatch or umi-request in real world
    fetch('/api/example.json')
      .then(response => response.json())
      .then(data => {
        setMenuData(data || []);
      });
    }, []);

  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Postagens', 1, <PieChartOutlined />),
    getItem('Option', '2', <DesktopOutlined />),
    getItem('Team', '3', <TeamOutlined />),
    getItem('Files', '4', <FileOutlined />),
    getItem('Teste', '5', <TeamOutlined />),
  ];
  
  
    const [collapsed, setCollapsed] = useState(false);
    const [menuData, setMenuData] = useState([]);
  
    return (
  
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
        <Image src={logo} className="center"/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background: "#fff" }}/>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Login />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  };
<<<<<<< HEAD

*/
=======
*/

>>>>>>> parent of a585b04... trocado exibição do front

export default App