import axios from 'axios'
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

axios.defaults.baseURL = "http://localhost:4000";

function App() {

  return (
   <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<IndexPage></IndexPage>}></Route>
      <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
    </Route>
    
   </Routes>
  )
}

export default App
