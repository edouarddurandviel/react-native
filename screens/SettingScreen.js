/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import auth from '@react-native-firebase/auth';


function SettingScreen(){

const [initializing, setInitializing] = useState(true);
const [user, setUser] = useState();

  // function onAuthStateChanged() {
  //   setUser(user);
  //   if (initializing){
  //     setInitializing(false);
  //   }
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // }, []);

  // if (initializing){
  //   return null;
  // }

  if (!user) {
  return (
      <View style={styles.nav}>
        <Text>Sigzz</Text>
      </View>
    );
  }
  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    nav: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textinput: {
      height: 200,
      padding: 10,
      backgroundColor: 'white',
    },
});

export default SettingScreen;
