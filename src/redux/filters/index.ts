import { createFilter } from 'redux-persist-transform-filter';

const FoodFilter = createFilter('Food', ['categories', 'cart']);

export const AllFilters = [FoodFilter];
