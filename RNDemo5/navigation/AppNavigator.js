import React from 'react';
import { createAppContainer,createDrawerNavigator,createStackNavigator, createSwitchNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import DrawerNavigator from './DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';

const AuthStack = createStackNavigator({ SignIn: LoginScreen });

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Drawer: DrawerNavigator,

    Auth: AuthStack,

  },
  {
    initialRouteName: 'Auth',
  })
);
