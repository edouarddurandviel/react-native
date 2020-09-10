/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React, {Component} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();


class HomeScreen extends Component {
    render (){
        return (
            <>
            <HomeStack.Navigator>
                <HomeStack.Screen name="Home" component={HomeScreen} />
            </HomeStack.Navigator>
            <View style={styles.nav}>
                <Text>Liste Screen</Text>
                <Button title="Go to tabs" onPress={() => HomeStack.navigate('Home')} />
            </View>
            </>
      );
}
}

const styles = StyleSheet.create({
    nav: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomeScreen;
