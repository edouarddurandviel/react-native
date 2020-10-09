/* eslint-disable prettier/prettier */
import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import Loader from './components/common/Loader';
import HooksVersion from './components/HooksVersion';

import { UserContext } from './contexts';
import { firebaseService } from './services';
import styles from './components/common/Loader/styles';

export default function App () {
  const [user, setUser] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const isFocused = useIsFocused();



  // useEffect(
  //   function () {
  //     firebaseService.signIn()
  //       .then(({user, error}) => {
  //         if (error) {
  //           Alert.alert('Something went wrong');
  //           return;
  //         }
  //         setIsActive(true);
  //         setUser(user);
  //         //firebaseService.newData(user.uid);
  //       });
  //   },
  //   []
  // );

  useEffect(
    function () {
      firebaseService.isConnected()
        .then(({user, isActive}) => {
          setIsActive(isActive);
          setUser(user);
          //firebaseService.newData(user.uid);
        });
    },
    [isFocused]
  );


  if (isActive === false) {
    return <View><Text style={styles.msg}>Veuillez créer un compte ou vous connecter avec Google SignIn</Text></View>;
  }

  if (!user) {
    return <Loader />;
  }

  return (
    <UserContext.Provider value={user}>
      <HooksVersion />
    </UserContext.Provider>
  );
}

