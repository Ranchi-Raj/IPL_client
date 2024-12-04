import { configureStore } from '@reduxjs/toolkit'
import detailsReducer from '../features/details/detailSlice'

export const store = configureStore({
  reducer: {
        details : detailsReducer
  },
})