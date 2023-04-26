import { configureStore } from "@reduxjs/toolkit";
import rollReducer from '../features/roller/dieSlice'

export const store = configureStore({
  reducer: {
    dieRolls: rollReducer
  }
})
