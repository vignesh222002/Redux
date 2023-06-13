const redux = require('redux')

// Middleware

const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default

// Axios

const axios = require('axios')

// State

let initialState = {
    loading: false,
    users: [],
    error: ''
}

// Action

function fetchUserRequest() {
    return {
        type: "FETCH_USER_REQUEST"
    }
}
function fetchUserSuccess(users) {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: users
    }
}
function fetchUserError(error) {
    return {
        type: 'FETCH_USER_ERROR',
        payload: error
    }
}

// reducer

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USER_REQUEST': return {
            ...state,
            loading: true
        }
        case 'FETCH_USER_SUCCESS': return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case 'FETCH_USER_ERROR': return {
            loading: false,
            users: [],
            error: action.payload
        }
    }
}

// Fetch Users

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // Response
            let users = res.data.map(user => user.name)
            dispatch(fetchUserSuccess(users))
        })
        .catch(err => {
            // Error
            dispatch(fetchUserError(err.message))
        })
    }
}

// Store

const store = redux.createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())