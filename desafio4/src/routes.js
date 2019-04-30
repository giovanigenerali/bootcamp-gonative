import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Platform } from 'react-native';

import { colors } from '~/styles';

import Home from '~/pages/Home';
import Details from '~/pages/Details';
import Cart from '~/pages/Cart';

const navigationOptions = {
  headerStyle: {
    height: Platform.OS === 'ios' ? 64 : 44,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    backgroundColor: colors.white,
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleStyle: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerTintColor: colors.regular,
  headerBackTitleStyle: {
    color: colors.regular,
  },
};

const getTabBarIcon = (navigation, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  if (routeName === 'Home') {
    iconName = 'home';
  } else if (routeName === 'Cart') {
    iconName = 'shopping-cart';
  }
  return <Icon name={iconName} size={26} color={tintColor} />;
};

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home: createStackNavigator(
        {
          Home: { screen: Home, navigationOptions },
          Details: { screen: Details, navigationOptions },
        },
        {
          initialRouteName: 'Home',
          headerBackTitleVisible: false,
        },
      ),
      Cart: createStackNavigator(
        {
          Cart: { screen: Cart, navigationOptions },
        },
        {
          initialRouteName: 'Cart',
          headerBackTitleVisible: false,
        },
      ),
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ tintColor }) => getTabBarIcon(navigation, tintColor),
      }),
      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: colors.regular,
      },
    },
  ),
);

export default Routes;
