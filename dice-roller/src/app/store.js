import { configureStore } from "@reduxjs/toolkit";
import rollReducer from '../features/die/dieSlice'

export const store = configureStore({
  reducer: {
    dieRolls: rollReducer
  }
})
