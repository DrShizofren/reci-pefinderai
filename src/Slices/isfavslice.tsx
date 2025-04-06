import { createSlice } from "@reduxjs/toolkit"

interface isFavState {
  value: boolean
}

const initialState : isFavState = {
  value: false
}

export const isFavSlice = createSlice({
  name:'isfav',
  initialState,
  reducers:{
    changeIsfav:(state) => {
      state.value = !state.value
    }
  }
})

export const {changeIsfav} = isFavSlice.actions  
export default isFavSlice.reducer