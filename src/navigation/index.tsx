import {
  NavigationContainer,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import { AppRoutes } from './Routes';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  const ActiveRoute = AppRoutes;

  const { screenOptions, initialRoute } = ActiveRoute;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={screenOptions}>
        {ActiveRoute.routes.map(
          (
            route: JSX.IntrinsicAttributes &
              RouteConfig<
                ParamListBase,
                string,
                StackNavigationState<ParamListBase>,
                NativeStackNavigationOptions,
                NativeStackNavigationEventMap
              >,
            index: React.Key | null | undefined,
          ) => (
            <Stack.Screen key={index} {...route} />
          ),
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
