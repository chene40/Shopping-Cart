import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const url = 'http://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems: [],
    totalAmount: 4,
    totalCost: 0,
    loading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_param, thunkAPI) => {
    try{
        const res = await axios(url)
        return res.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response)
    }
})

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
    },
    extraReducers: {
        [getCartItems.pending]: (state) => { state.loading = true },
        [getCartItems.fulfilled]: (state, action) => {
            state.loading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state) => { state.loading = false }
    }
})

export const { clearCart, removeItem, increaseAmount, decreaseAmount, totalCostAndAmount } = cartSlice.actions
export default cartSlice.reducer