import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roll: 0
}

export const dieSlice = createSlice({
  name: "die",
  initialState,
  reducers: {
    rollDie: (state, action) => {
      state.roll = action.payload
    },

    reset: (state) => {
      state.roll = 0
    }
  },
})

export const { rollDie, reset } = dieSlice.actions

export default dieSlice.reducer
