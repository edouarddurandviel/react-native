/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import { Col, Row, Grid } from '../../react-native-easy-grid';
import styles from './styles';

import auth  from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';




export default function SignInScreen({navigation}) {

  GoogleSignin.configure({
    webClientId: '586134805330-hkmlce7is50eq9n1gp84jeu55unt8ti7.apps.googleusercontent.com',
  });

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [success, setSuccess] = useState();
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


  const handleCreateUser = () => {

    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('UserDetailScreen');
        setIsLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

    async function onGoogleButtonPress() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }

    async function NavigateToDetail() {
      await onGoogleButtonPress();
      navigation.navigate('UserDetailScreen');
    }

      return (
        <Grid style={styles.formGrid}>
                <Row style={styles.mainformRow}>
                    <Col>
                      <View><Text style={styles.formTitle}>Sign In...</Text></View>
                      <Row style={styles.formRow}>
                        <TextInput
                          placeholder={'name'}
                          style={styles.inputs}
                          onChangeText={setName}
                          />
                      </Row>
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
                        <TouchableOpacity style={styles.signInButton} onPress={handleCreateUser}>
                              { !isLoading ? (
                                <Text style={styles.signInButtonText}>Create account</Text>
                              ) : (
                              <Text style={styles.signInButtonText}>Is loading...</Text>
                              )}
                        </TouchableOpacity>
                      </Row>
                      <Row style={styles.formRow}>
                        <TouchableOpacity style={styles.signInButton} onPress={() => NavigateToDetail()}>
                          <Text style={styles.signInButtonText}>Google Sign In...</Text>
                        </TouchableOpacity>
                      </Row>

                      { user && user.emailVerified === true ? (
                        <Row style={styles.formRowGoogle}>
                         { user.photoURL !== null ? (
                              <Col size={1}><Image style={styles.images} source={{uri: user.photoURL }} /></Col>
                          ) : (
                          <Col size={1}><Text>rien</Text></Col> )}
                          <Col size={4}><Text style={styles.googleName} onPress={() => navigation.navigate('UserDetailScreen')}>{user.displayName}</Text></Col>
                        </Row>
                      ) : ( <Text style={styles.formTitle}>Rien</Text>) }
                      <Row style={styles.formRow}>
                          <Text style={styles.loginLink} onPress={() => navigation.navigate('LogInSreen')}>Login page</Text>
                      </Row>
                    </Col>
                </Row>
            </Grid>
      );
    }
