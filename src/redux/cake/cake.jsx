import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, addStock } from '../cake/cake'

function Cake() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number Of Cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Buy Cake</button>
      <br />
      <button onClick={() => dispatch(addStock(5))}>Add Cake Stock</button>
    </div>
  )
}

export default Cake