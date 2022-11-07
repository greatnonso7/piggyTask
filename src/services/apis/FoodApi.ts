import Axios from '../Axios';

export default {
  fetchCategories: () => Axios.get('/categories.php').then(({ data }) => data),
  filterByCategory: async (strCategory: string) =>
    Axios.get(`/filter.php?c=${strCategory}`).then(({ data }) => data),
};
