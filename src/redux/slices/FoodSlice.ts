import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  foodsPerCategory: [],
};

const Food = createSlice({
  name: 'Food',
  initialState,
  reducers: {
    fetchCategories: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { fetchCategories } = Food.actions;
export default Food.reducer;
