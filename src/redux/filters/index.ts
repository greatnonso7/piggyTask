import { createFilter } from 'redux-persist-transform-filter';

const FoodFilter = createFilter('Food', [
  'categories',
  'cart',
  'activeCategory',
  'meals',
]);

export const AllFilters = [FoodFilter];
