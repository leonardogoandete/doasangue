import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//import './index.css'
import "antd/dist/antd.css"
import { ConfigProvider } from 'antd'
import ptBR from 'antd/lib/locale/pt_BR'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
)
