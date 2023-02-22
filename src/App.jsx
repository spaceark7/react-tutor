import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './features/About/About'
import Login from './features/Auth/Login'
import Register from './features/Auth/Register'
import Home from './features/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <main>
        <h1>React Router</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
