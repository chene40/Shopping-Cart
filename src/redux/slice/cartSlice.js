import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

const initialState = {
    cartItems: cartItems,
    totalAmount: 4,
    totalCost: 0,
    loading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, action) => {
            const itemID = action.payload
            state.cartItems = state.cartItems.filter(item => item.id !== itemID)
        },
        increaseAmount: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount += 1;
        },
        decreaseAmount: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload.id)
            cartItem.amount -= 1;
        },
        totalCostAndAmount: (state) => {
            let totalAmount = 0
            let totalCost = 0
            state.cartItems.forEach(item => {
                totalAmount += item.amount
                totalCost += item.amount * item.price
            })
            state.totalAmount = totalAmount
            state.totalCost = totalCost
        }
    }
})

// console.log(cartSlice)

export const { clearCart, removeItem, increaseAmount, decreaseAmount, totalCostAndAmount } = cartSlice.actions
export default cartSlice.reducer