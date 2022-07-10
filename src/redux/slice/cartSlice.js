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
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        }
    }
})

// console.log(cartSlice)

export const {clearCart} = cartSlice.actions
export default cartSlice.reducer