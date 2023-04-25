import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
    isError: false,
    error:''

}

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_, thunkAPI) => {
    try {
        const res = await axios.get('https://course-api.com/react-useReducer-cart-project')
        return res.data
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message)
    }

})

const cartSlice = createSlice({
    name: 'cart', initialState, reducers: {
        clearCart: (state) => {
            state.cartItems = []
        },
        removeItem: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(item => item.id !== payload.id)
        },
        increase: (state, { payload }) => {
            const item = state.cartItems.find(item => item.id === payload.id)
            item.amount = item.amount + 1
        },
        decrease: (state, { payload }) => {
            const item = state.cartItems.find(item => item.id === payload.id)
            item.amount = item.amount - 1
        },
        calculateTotal: (state, action) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                total += item.price * item.amount
                return amount += item.amount
            })
            state.amount = amount
            state.total = total.toFixed(2)
        }
    }, extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, state => {
            state.isLoading = true
        }).addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.cartItems = action.payload
        }).addCase(getCartItems.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.error=action.payload
        })
    }
})
export const { clearCart, removeItem, increase, decrease, calculateTotal } = cartSlice.actions

export default cartSlice.reducer

