import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import { ConfigProvider } from 'antd'
import "antd/dist/antd.css"
import ptBR from 'antd/lib/locale/pt_BR'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
