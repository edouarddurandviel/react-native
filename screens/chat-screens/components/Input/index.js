/* eslint-disable prettier/prettier */
import React, {useCallback, useState, useContext} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import {firebaseService} from '../../services';
import {UserContext} from '../../contexts';

import Button from '../common/Button';
import Loader from '../common/Loader';


export default function Input() {
  const {uid} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePress = useCallback(
    function () {
      setIsLoading(true);
      firebaseService.createMessage({message, uid}).then(function () {
        setIsLoading(false);
        setMessage('');
      });
    },
    [message],
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Write you message"
        />
      </View>

      <Button style={styles.submitBtn} text="Send" onPress={handlePress} disabled={isLoading} />

      {isLoading && <Loader />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  inputContainer: {
    width: '70%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 15,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  submitBtn: {
    borderRadius: 8,
  },
});
