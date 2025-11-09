import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;

      // Check if recipe already exists in favorites
      const existingIndex = state.favoriterecipes.findIndex(
        (item) => item.idFood === recipe.idFood
      );

      if (existingIndex !== -1) {
        // If exists, remove it (unfavorite)
        state.favoriterecipes.splice(existingIndex, 1);
      } else {
        // Otherwise, add it
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
