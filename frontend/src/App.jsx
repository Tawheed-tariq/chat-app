import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/register/register'
import Login from './pages/login/login'
import Chat from './pages/chat/chat'
import './App.css'
import Profile from './pages/user-profile/Profile'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<Chat/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
