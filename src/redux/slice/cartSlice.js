import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    amount: 4,
    totalCost: 0,
    loading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState
})

console.log(cartSlice)

export default cartSlice.reducer