import { reducerActions as reducers } from './reducer';
import { showMessage } from 'react-native-flash-message';
import { FoodApi } from '../../services/apis';

const IsState = {
  categories: [],
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
    async handleError(error: any) {
      dispatch.Food.setError(true);
      if (error || error?.data?.errors || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';

        return showMessage({
          message,
          type: 'danger',
          duration: 2500,
        });
      }
    },
  }),
};
