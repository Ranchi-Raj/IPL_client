import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  details : {},
  cart : {1 : 0, 2 : 0, 3 : 0, 4  : 0},
  price : {1 : 999, 2 : 99, 3 : 499, 4 : 599},
  added : false
}

export const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    update: (state, action) => {
      console.log("Redux" ,action.payload)
      state.details = action.payload
      state.details.name = state.details.name.toUpperCase()
      console.log("Added details",state.details)
    },
    addToCart : (state, action) => {
      state.cart[action.payload]++;
    },
    removeFromCart : (state, action) => {
      state.cart[action.payload]--;
    },
    resetCart : (state) => {
      state.cart = {1 : 0, 2 : 0, 3 : 0, 4  : 0};
    },
  },
  setAdded : (state, action) => {
    state.added = action.payload;
  }
})

// Action creators are generated for each case reducer function
export const { update, addToCart, removeFromCart, resetCart, setAdded} = detailSlice.actions

export default detailSlice.reducer