/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// pages
import LogInSreen from '../screens/LogInScreen';
import SignInSreen from '../screens/SignInScreen';

const StackAccount = createStackNavigator();


class AccountNavigation extends Component{
  render() {
    return (
      <StackAccount.Navigator>
        <StackAccount.Screen name="LogInSreen" component={LogInSreen} />
        <StackAccount.Screen name="SignInSreen" component={SignInSreen} />
      </StackAccount.Navigator>
    );
  }
}
export default AccountNavigation;

