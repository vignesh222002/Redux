import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


const initialState = {
    loading: false,
    user: [],
    error: ''
}

export const getUser = createAsyncThunk('user/getUser', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res => res.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.user = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default userSlice.reducer