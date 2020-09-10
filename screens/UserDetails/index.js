/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import { Text, Image} from 'react-native';
import { Col, Row, Grid } from '../../react-native-easy-grid/index';
import styles from './styles';
import auth from '@react-native-firebase/auth';

export default function UserDetailScreen({navigation}) {

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

  if (user){
      return (
        <Grid style={styles.formGrid}>
                <Row style={styles.mainformRow}>
                    <Col size={1}><Image style={styles.images} source={{uri: user.photoURL }} /></Col>
                    <Col size={3}>
                      <Row style={styles.userRow}>
                          <Text style={styles.userEmail}>{user.email.toLowerCase()}</Text>
                        </Row>
                      <Row style={styles.userRow}>
                        <Text style={styles.userDisplay}>{user.displayName}</Text>
                      </Row>
                      <Row style={styles.userRow}>
                        <Text style={styles.userDisplay}>{user.metadata.creationTime}</Text>
                      </Row>
                    </Col>
                </Row>
            </Grid>
      );
    }
  }



