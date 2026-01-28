import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux' 
import { decrement, increment, multiply } from './redux/Counter/counterSlice'  //arithematic operators


function App() {

  const count = useSelector((state) => state.counter.value)  //for values 
  const dispatch = useDispatch(); //Used for interact components with redux store 

  return (
    <>
       <h1>Counter App</h1>
      <div>
       Currently count is : {count}              {/* variable from counter.js */}
         <br /><br /><br /><br />
       <button onClick={() => dispatch(decrement())}>-</button>       {/*Used for decrement */}
        <br /><br /><br /><br />
        <button onClick={() => dispatch(increment())}>+</button>     {/*Used for increment */}
         <br /><br /><br /><br />
        <button onClick={() => { dispatch(multiply()); }}>*</button>  {/*Used for multiply */}
      </div>
    </>
  )
}

export default App
