import { configureStore } from '@reduxjs/toolkit'
import { favoriteSlice } from '../Slices/Favoritesslice'
import { isFavSlice } from '../Slices/isfavslice'
import { modeSlice } from '../Slices/modeslice'

export const store = configureStore({
  reducer: {
    favorite: favoriteSlice.reducer,
    isfavorite: isFavSlice.reducer,
    mode: modeSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch