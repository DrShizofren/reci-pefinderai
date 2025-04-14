import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoriteItem {
  id: string;
  name: string;
  howtocook: string;
}

interface FavoriteState {
  value: FavoriteItem[];
}

const FAVORITES_KEY = 'favorites';

// Load from localStorage
const loadFavorites = (): FavoriteItem[] => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

// Save to localStorage
const saveFavorites = (favorites: FavoriteItem[]) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const initialState: FavoriteState = {
  value: loadFavorites()
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
      state.value.push(action.payload);
      saveFavorites(state.value);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(item => item.id !== action.payload);
      saveFavorites(state.value);
    },
    removeFavorites: (state) => {
      state.value = [];
      saveFavorites([]);
    }
  }
});

export const {
  addFavorite,
  removeFavorite,
  removeFavorites
} = favoriteSlice.actions;

export default favoriteSlice.reducer;
