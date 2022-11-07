import Dashboard from '../screens/dashboard';
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
  ],
};
