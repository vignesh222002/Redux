import { combineReducers } from "redux";
import Cakereducer from "./Cake/CakeReducer";
import { iceCreamReducer } from "./IceCream/IceCreamReducer";


const rootReducer = combineReducers({
    cake: Cakereducer,
    iceCream : iceCreamReducer
})

export default rootReducer