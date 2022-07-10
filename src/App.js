import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import CartContainer from './components/CartContainer'
import { useDispatch, useSelector } from 'react-redux'
import { totalCostAndAmount, getCartItems } from './redux/slice/cartSlice'

export default function App(){

  const { cartItems, loading } = useSelector(store => store.cart)
  const { open } = useSelector(store => store.modal)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(totalCostAndAmount())
  }, [cartItems])

  useEffect(() => {dispatch(getCartItems())}, [])

  if (loading){
    return (
      <div className='loading'>
        <h1> Loading... </h1>
      </div>
    )
  }

  return (
    <main>
      {open && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}