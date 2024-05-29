import React from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Iteam from './Iteam'
import Iteams from './Iteams'
import AddIteam from './AddIteam'
import Cart from './Cart'
import Footer from './Footer'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Iteam/>}/>
        <Route path='/AddItem' element={<AddIteam/>}/>
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
