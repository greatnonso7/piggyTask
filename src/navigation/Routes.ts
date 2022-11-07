import Dashboard from '../screens/dashboard';
import SingleMeal from '../screens/dashboard/SingleMeal';
import Login from '../screens/login';

const options = {
  headerShown: false,
};

export const AppRoutes = {
  initialRoute: 'Login',
  screenOptions: options,
  routes: [
    {
      name: 'Login',
      component: Login,
    },
    {
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      name: 'SingleMeal',
      component: SingleMeal,
    },
  ],
};
