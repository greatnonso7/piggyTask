import { reducerActions as reducers } from './reducer';
import { FoodApi } from '../../services/apis';
import { showMessage } from 'react-native-flash-message';

const IsState = {
  categories: [],
  meals: [],
  activeCategory: 'Beef',
  cart: [],
};

export const Food = {
  name: 'Food',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async fetchFoodCategories() {
      dispatch.Food.setError(false);
      try {
        const api = await FoodApi.fetchCategories();
        if (api) {
          dispatch.Food.setState({
            categories: api?.categories,
          });
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async setActiveCategory(category: string) {
      dispatch.Food.setState({
        activeCategory: category,
      });
    },

    async getFoodItemWithCategory(category: string) {
      dispatch.Food.setError(false);
      try {
        const api = await FoodApi.filterByCategory(category);
        if (api) {
          dispatch.Food.setState({
            meals: api?.meals,
          });
        }
      } catch (error) {
        this.handleError(error);
      }
    },

    async addItemToCart(meal: any, state: { Food: { cart: any } }) {
      dispatch.Food.setError(false);
      try {
        let helperArray = state.Food.cart;
        let itemIndex = helperArray.indexOf(meal);
        if (helperArray?.includes(meal)) {
          helperArray?.splice(itemIndex, 1);
          showMessage({
            message: 'Removed from cart successfully',
            type: 'success',
            duration: 2000,
          });
        } else {
          helperArray.push(meal);
          showMessage({
            message: 'Added to cart successfully',
            type: 'success',
            duration: 2000,
          });
        }
        dispatch.Food.setState({
          cart: helperArray,
        });
      } catch (error) {
        this.handleError(error);
      }
    },

    async handleError(error: any) {
      dispatch.Food.setError(true);
      console.log(error);
    },
  }),
};
