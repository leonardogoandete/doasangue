import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedLayout } from './components/ProtectedLayout'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Postagem } from './components/Postagem'
import './App.css'

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
        </Routes>      
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App