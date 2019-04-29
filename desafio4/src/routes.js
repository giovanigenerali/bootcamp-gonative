import {
  createAppContainer,
  // createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { Platform, StyleSheet } from 'react-native';

import { colors } from '~/styles';

import Home from '~/pages/Home';
import Details from '~/pages/Details';
import Cart from '~/pages/Cart';

// const Routes = createAppContainer(
//   createSwitchNavigator({
//     Main: createBottomTabNavigator(
//       {
//         Home,
//         Cart,
//       },
//       {
//         initialRouteName: 'Home',
//         tabBarOptions: {
//           showIcon: true,
//           showLabel: false,
//           activeTintColor: colors.primary,
//           inactiveTintColor: colors.regular,
//           style: {
//             backgroundColor: colors.white,
//           },
//         },
//       },
//     ),
//     Details,
//   }),
// );

const navigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 74 : 54,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.secondary,
  },
  headerTintColor: colors.regular,
  headerBackTitle: null,
};

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main: createStackNavigator(
        {
          Home,
          Details,
        },
        {
          initialRouteName: 'Home',
          navigationOptions,
        },
      ),
      Cart: createStackNavigator(
        {
          Cart,
        },
        {
          initialRouteName: 'Cart',
          navigationOptions,
        },
      ),
    },
    {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.gray,
        style: {
          height: Platform.OS === 'ios' ? 74 : 54,
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          backgroundColor: colors.white,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderColor: colors.lighter,
        },
        indicatorStyle: {
          height: 0,
        },
      },
    },
  ),
);

// const HomeStack = createStackNavigator({
//   Home,
//   Details,
// });

// const CartStack = createStackNavigator({
//   Cart,
// });

// const Routes = createAppContainer(
//   createBottomTabNavigator(
//     {
//       Home: HomeStack,
//       Cart: CartStack,
//     },
//     {
//       /* Other configuration remains unchanged */
//     },
//   ),
// );

export default Routes;
