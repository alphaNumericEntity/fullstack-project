import axios from 'axios'
import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import { UserContextProvider } from '../src/UserContext'
import AccountPage from './pages/AccountPage'

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;
axios.defaults.timeout = 36000000;//10min

function App() {

  return (
    <UserContextProvider>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<IndexPage></IndexPage>}></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
        <Route path='/account/:subpage?' element={<AccountPage></AccountPage>}></Route>

      </Route>
    </Routes>
    </UserContextProvider>
   
  )
}

export default App
