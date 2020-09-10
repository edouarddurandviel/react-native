/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import 'react-native-gesture-handler';

import React, {useState, useEffect, useCallback, useContext, createContext, useReducer } from 'react';
import { View, StyleSheet, Button, TextInput, FlatList, SafeAreaView} from 'react-native';
import FirebaseService from './FirebaseService';
import './reducer';
//import { GoogleSignin } from '@react-native-community/google-signin';

import Message from './Message';

const UserContext = createContext(null);


export default function ChatScreen() {

    const { uid } = useContext(UserContext);
    const [messages, dispatchMessages] = useReducer(messagesReducer, []);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();
    const [user, setUser] = useState(null);

    const firebaseService = new FirebaseService();


    useEffect(
        function () {
            return firebaseService.messageRef
              .orderBy('created_at', 'desc')
              .onSnapshot(function (snapshot) {
                dispatchMessages({ type: 'add', payload: snapshot.docs });
              });
          },
          [false]
      );


    return (
        <UserContext.Provider value={user}>
        <SafeAreaView>
        <View style={styles.messagesContainer}>
            <FlatList
                inverted
                data={messages}
                keyExtractor={function (item) {
                    return item.id;
                              }}
                renderItem={function ({ item }) {
                    return (
                    <Message side={data.side} message={data.message} />
                    );
                }}
            />
        </View>

        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Write you message" />
            </View>

            <Button text="Send" onPress={handleSend} />
        </View>
        </SafeAreaView>
        </UserContext.Provider>
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 3,
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    messagesContainer: {
        height: '100%',
        paddingBottom: 100
      },
      inputContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        bottom: 0,
        paddingVertical: 10,
        paddingLeft: 20,
        borderTopWidth: 1,
        borderTopColor: 'grey',
    },
});