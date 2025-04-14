import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface isFavState {
  value: boolean
}

const initialState: isFavState = {
  value: false
}

export const isFavSlice = createSlice({
  name: 'isfav',
  initialState,
  reducers: {
    changeIsfav: (state) => {
      state.value = !state.value
    },
    setIsfav: (state, action: PayloadAction<{ value: boolean }>) => {
      state.value = action.payload.value
    }
  }
})

export const { changeIsfav,setIsfav } = isFavSlice.actions
export default isFavSlice.reducer