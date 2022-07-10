import React from 'react'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import './index.css'

export default function App(){
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}