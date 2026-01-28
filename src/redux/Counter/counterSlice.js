import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,  //initial value is 0 so check it for multiplying 
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1     //for add
    },
    decrement: (state) => {
      state.value -= 1   //for subtract 
    },
    multiply: (state) => {
      state.value *= 2   //for mutliply 
    },
  },
})

// ✅ Are you exporting multiply here?
export const { increment, decrement, multiply } = counterSlice.actions //export all functions

export default counterSlice.reducer
