import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/register/register'
import Login from './pages/login/login'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
