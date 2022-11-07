import Axios from '../Axios';

export default {
  fetchCategories: () => Axios.get('/categories.php').then(({ data }) => data),
  filterByCategory: (category: string) =>
    Axios.get(`/filter.php?c=${category}`).then(({ data }) => data),
};
