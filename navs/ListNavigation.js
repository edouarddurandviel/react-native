/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {Component} from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// pages
import DetailScreen from '../screens/DetailScreen';
import ListScreen from '../screens/ListScreen';


const Stack = createStackNavigator();


class ListNavigation extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
    );
  }
}

export default ListNavigation;
