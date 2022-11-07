import { combineReducers } from '@reduxjs/toolkit';
import FoodSlice from './FoodSlice';

const rootReducer = combineReducers({
  Food: FoodSlice,
});
export default rootReducer;
