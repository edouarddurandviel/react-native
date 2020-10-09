/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from '../../react-native-easy-grid/index';
import auth from '@react-native-firebase/auth';

import styles from './styles';

export default function LogInScreen({navigation}) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);


  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(){
    setUser(auth().currentUser);
    if (initializing) {setInitializing(false);}
  }

  useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
  });

  if (initializing) {return null;}


  const handleLogin = () => {
    setIsLoading(true);
    try {
      auth().signInWithEmailAndPassword(email, password)
      .then(() => {
          navigation.navigate('UserDetailScreen');
          setIsLoading(false);

      }).catch((error) => {
          console.log(error.toString());
      });
    }
    catch (error){
      setIsLoading(false);
      Alert.alert(error);
    }

  };

  const handleLogout = () => {
      auth().signOut()
      .then(() =>console.log('you logged out same screen')
      )
      .catch(error => {
        if (error.code === 'auth/no-current-user') {
          console.log('you are allready logged out');
        }
        console.error(error);
      });
  };

      return (
        <Grid style={styles.formGrid}>
                <Row style={styles.mainformRow}>
                    <Col>
                      <View><Text style={styles.formTitle}>LogIn</Text></View>
                      <View><Text style={styles.formPwd}>email : user@user.com</Text></View>
                      <View><Text style={styles.formPwd}>password : useruser</Text></View>
                      <Row style={styles.formRow}>
                        <TextInput
                          placeholder={'email'}
                          keyboardType={'email-address'}
                          style={styles.inputs}
                          onChangeText={setEmail}
                          />
                      </Row>
                      <Row style={styles.formRow}>
                        <TextInput
                          placeholder={'password'}
                          style={styles.inputs}
                          onChangeText={setPassword}
                          secureTextEntry
                          />
                      </Row>
                      <Row style={styles.formRow}>
                        <TouchableOpacity
                              style={styles.signInButton}
                              onPress={handleLogin}
                            >
                            <Text style={styles.signInButtonText}>Login</Text>
                        </TouchableOpacity>
                      </Row>
                      <Row style={styles.formRow}>
                        <Text style={styles.registerLink} onPress={() => navigation.navigate('SignInScreen')}>Create an account</Text>
                      </Row>
                      {user ? (
                         <View>
                            <Text style={styles.formPwd}>Welcome {user.email} - from: {user.providerId}</Text>
                            <Text style={styles.registerLink} onPress={handleLogout}>Log out</Text>
                         </View>
                      ) : null}
                    </Col>
                </Row>
            </Grid>
      );
    }




