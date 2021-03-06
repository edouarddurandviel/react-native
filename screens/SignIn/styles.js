/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../theme';

export default StyleSheet.create({
    formGrid: {
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
      margin: 20,
      paddingHorizontal: 10,
      maxHeight: '70%',
      minHeight: 530,
    },
    mainformRow: {
      height: 300,
    },
    formRow: {
      margin: 10,
      height: 45,
    },
    formRowGoogle: {
      margin: 5,
      marginHorizontal: 20,
      height: 50,
    },
    formTitle: {
      height: 50,
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical: 5,
      marginVertical: 5,
      textAlignVertical: 'center',
      textAlign: 'center',
      textTransform: 'uppercase',
      color: COLORS.tomato,
    },
    inputs: {
      fontSize: 18,
      lineHeight: 18,
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor: COLORS.lightGrey,
      borderRadius: 8,
    },
    signInButton: {
      alignItems: 'center',
      width: '100%',
      height: 50,
      paddingVertical: 15,

      backgroundColor: COLORS.primary,
      borderRadius: 8,
    },
    signInButtonText: {
      textAlign: 'center',
      fontSize: 18,
      lineHeight: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    registerLink: {
      marginVertical: 20,
      alignItems: 'center',
      fontSize: 18,
      lineHeight: 20,
      width: '100%',
      color: COLORS.primary,
    },
    registerLinkText: {
      color: 'black',
    },
    googleName:{
      color: COLORS.primary,
      lineHeight: 50,
      paddingLeft: 10,
      fontSize: 20,
    },
    images: {
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    loginLink: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      width: 200,
      color: COLORS.primary,
      fontSize: 18,
      height: 30,
      lineHeight: 28,
      padding: 0,
      margin: 0,
    },
    loginLinkIcon: {
      display: 'flex',
    },
  });
