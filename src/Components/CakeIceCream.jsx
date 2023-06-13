import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake, buyIceCream } from '../Redux'

function CakeIceCream() {
    let numOfCake = useSelector(state => state.cake.numOfCake)
    let numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    let dispatch = useDispatch()

  return (
    <div>
        <h2>Number Of Cake - {numOfCake}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        <h2>Number of IceCream - {numOfIceCream}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default CakeIceCream