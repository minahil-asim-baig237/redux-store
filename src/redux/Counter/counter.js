import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , multiply } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
 //Main Counter Function app 
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Multiply value"
          onClick={() => dispatch(multiply())}
        >
          Multiply
        </button>
      </div>
    </div>
  )
}