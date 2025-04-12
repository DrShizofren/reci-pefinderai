import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface FavoriteItem {
  id: string;
  name: string;
  howtocook: string;
}

interface FavoriteState {
  value: FavoriteItem[]
}

const initialState: FavoriteState = {
  value: [
    
  ]
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      state.value.push(action.payload);
    },
  }
})

export const { addFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer