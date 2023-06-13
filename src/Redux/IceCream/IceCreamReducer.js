// State

const initialState = {
    numOfIceCream: 10
}

// Reducer

export const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'buyIceCream': return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }
}