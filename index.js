// Action

const Buy_Cake = 'Buy_Cake'

function buyCake() {
    return {
        type: Buy_Cake,
        info: 'First Redux Action'
    }
}

// Reducer  (PreviousState, Action) => NewState

const initialState = {
    numOfCakes: 10
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Buy_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}
