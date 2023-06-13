import { configureStore } from "@reduxjs/toolkit"
import cakeReducer from '../cake/cake.js'
import iceCreamReducer from '../iceCream/iceCream.js'
import userReducer from '../user/user.js'

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    }
})

export default store