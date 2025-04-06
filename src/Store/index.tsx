import { configureStore } from '@reduxjs/toolkit'
import { favoriteSlice } from '../Slices/Favoritesslice'
import { isFavSlice } from '../Slices/isfavslice'

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
    isfavorite: isFavSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch