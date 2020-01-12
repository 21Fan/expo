import React from 'react';
import { Platform,View, ScrollView,SafeAreaView,StyleSheet } from 'react-native';
import { DrawerItems,createDrawerNavigator } from 'react-navigation';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import MainTabNavigator from './MainTabNavigator';

import { Ionicons } from '@expo/vector-icons';
import test from '../screens/test'
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
const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container} >
            <View style={{height:100,backgroundColor:'red'}}></View>
            <View style={styles.transitionView}></View>
            <DrawerItems {... props} />  
        </SafeAreaView>
    </ScrollView>
);
const DrawerNavigator = createDrawerNavigator(
    {
        // You could add another route here for authentication.
        // Read more at https://reactnavigation.org/docs/en/auth-flow.html
        
        Main: {
          screen: MainTabNavigator,
          navigationOptions: {
              /**
               * drawer 导航 icon
               */
              
              drawerIcon: ({ tintColor, focused }) =>
                  <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                      size={26}
                      style={{ color: tintColor }}
                  />,
              /**
               * drawerLabel或headerTitle 备用标题
               */
              title: '首页',
              /**
               * drawer 标题
               */
              // drawerLabel: '首页label'
          }
      },
        Options: {
          screen: Options,
          navigationOptions: {
              /**
               * drawer 导航 icon
               */
              title: '首页',
              drawerIcon: ({ tintColor, focused }) =>
                  <Ionicons
                  name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
                      size={26}
                      style={{ color: tintColor }}
                  />
          }
      }
      },
      {
        initialRouteName: 'Main',
        overlayColor: 'rgba(0,0,0,0.6)',
        drawerType:'slide',
        contentComponent: CustomDrawerContentComponent,
        contentOptions: {
          activeTintColor: '#e91e63',
          itemsContainerStyle: {
            marginVertical: 0,
          },
          iconContainerStyle: {
            opacity: 1
          }
        }
        

      }
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  transitionView: {
    height: 5,
    backgroundColor: 'rgba(230,230,230, .5)'
},
});
export default DrawerNavigator;
