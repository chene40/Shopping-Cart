import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.open = true
        },
        closeModal: (state, action) => {
            state.open = false
        }
    }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer