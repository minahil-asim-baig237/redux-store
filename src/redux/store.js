import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter/counterSlice'

export const store = configureStore({
  reducer: {     //slice Name
    counter: counterReducer,  //Root reducer for counting 
  },
})