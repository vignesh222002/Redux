//  Multiple Reducers

const redux = require('redux')

// Redux Logger

const reduxlogger = require('redux-logger')
const applyMiddleware = redux.applyMiddleware
const logger = reduxlogger.createLogger()

// State

let cakeState = {
    numOfCake: 10
}
let iceState = {
    numOfIce: 10
}

// Action

function BUYCAKE() {
    return {
        type: 'buyCake'
    }
}
function BUYICE() {
    return {
        type: 'buyIce'
    }
}

// Reducer

let cakeReducer = (state = cakeState, action) => {
    switch(action.type) {
        case 'buyCake': return {
            ...state,
            numOfCake: state.numOfCake - 1
        }
        default: return state
    }
}

let iceReducer = (state = iceState, action) => {
    switch(action.type) {
        case 'buyIce': return {
            ...state,
            numOfIce: state.numOfIce - 1
        }
        default: return state
    }
}

// Combine The Multiple Reducers

const rootReducer = redux.combineReducers({
    cake: cakeReducer,
    ice: iceReducer
})

// Store

const store = redux.createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State ', store.getState())
store.subscribe(() => {})
store.dispatch(BUYCAKE())
store.dispatch(BUYCAKE())
store.dispatch(BUYICE())
store.dispatch(BUYICE())
