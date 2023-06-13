// const redux = require('redux')
// const createStore = redux.createStore

// // Action

// const Buy_Cake = 'Buy_Cake'

// function buyCake() {
//     return {
//         type: Buy_Cake,
//         info: 'First Redux Action'
//     }
// }

// // Reducer  (PreviousState, Action) => NewState

// const initialState = {
//     numOfCakes: 10
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case Buy_Cake: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }

//         default: return state
//     }
// }

// // Store

// const store = createStore(reducer)
// console.log('Initial State ', store.getState());
// let unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// store.dispatch(buyCake())
// unsubscribe()

const redux = require('redux')

// State 

let initialState = {
    numOfCake: 10,
}

// Action

function Buy_Cake() {
    return {
        type: 'BuyCake'
    }
}
function Buy_Ice() {
    return {
        type: 'BuyIce'
    }
}

// Reducer 

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BuyCake': return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
        case 'BuyIce': return {
            ...state,
            numOfIce: state.numOfIce - 1
        }
        
        default: return state
    }
}

// Store

let store = redux.createStore(reducer)
console.log('Initial State', store.getState())
store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(Buy_Cake())
store.dispatch(Buy_Cake())
store.dispatch(Buy_Cake())
store.dispatch(Buy_Ice())
store.dispatch(Buy_Ice())
store.dispatch(Buy_Ice())