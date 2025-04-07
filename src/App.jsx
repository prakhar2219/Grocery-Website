import React from 'react'
import Navbar from './component/Navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import{Home} from "./pages/Home.jsx"
const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
