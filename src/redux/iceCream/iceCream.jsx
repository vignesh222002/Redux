import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, addStock } from '../iceCream/iceCream'

function IceCream() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Number Of IceCream - {numOfIceCream}</h2>
      <button onClick={() => dispatch(ordered())}>Buy IceCream</button>
      <br />
      <button onClick={() => dispatch(addStock(5))}>Add IceCream Stock</button>
    </div>
  )
}

export default IceCream