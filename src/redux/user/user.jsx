import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './user.js'

function User() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    useEffect(() => {
        dispatch(getUser())
    }, [])

    return (
        <div>
            {user.loading && <div>Loading...</div>}
            {!user.loading && user.user.length ? (user.user.map(user => <li id={user.id}>{user.name}</li>)) 
            : (user.error && <div>{user.error}</div>) }
        </div>
    )
}

export default User