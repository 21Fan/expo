import React from 'react';
import { createAppContainer,createDrawerNavigator,createStackNavigator, createSwitchNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import MainTabNavigator from './MainTabNavigator';



import Options from '../screens/Options';
// const OptionsDrawer = createDrawerNavigator({ 
//   Options: Options 

// },
//   {
//     initialRouteName: 'Options',
//     swipeEnabled: true,
//     animationEnabled: true,
//     lazy: false,
//     tabBarPosition:'bottom',

//   }
  
//   );
const DrawerNavigator = createDrawerNavigator(
    {
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        Main: MainTabNavigator,
        Options:Options,
      },
      {
        initialRouteName: 'Main',
      }
);
export default DrawerNavigator;
