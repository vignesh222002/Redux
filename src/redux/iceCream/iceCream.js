import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from '../cake/cake.js'

const initialState = {
    numOfIceCream : 10
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCream--
        },
        addStock: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCream--
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered, addStock } = iceCreamSlice.actions