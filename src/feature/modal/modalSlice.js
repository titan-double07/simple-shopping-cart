import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false }

const modalSlice = createSlice({
    name: 'modal', initialState, reducers: {
        openModal: (state) => {
            console.log('first')
            state.isOpen = true
    },
        closeModal: (state) => {
            console.log('last')
            state.isOpen = false
    }
    }
})
export const { openModal,closeModal } = modalSlice.actions

export default modalSlice.reducer