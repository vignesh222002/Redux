import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../Redux'

function HookCakeContainer() {

    let numOfCake = useSelector(state => state.numOfCake)
    let dispatch = useDispatch()

  return (
    <div>
        <h2>Hook - Number of Cakes - {numOfCake}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer