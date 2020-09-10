/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import {COLORS} from './../../theme';

export default StyleSheet.create({
  formGrid: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 20,
    paddingHorizontal: 10,
    maxHeight: '20%',
    minHeight: 100,
  },
  images: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  mainformRow: {
    height: 'auto',
  },
  userRow: {
    marginHorizontal: 10,
    height: 'auto',
  },
  userView: {
    width: '100%',
    flexDirection: 'row',
  },
  userEmail: {
    fontSize: 18,
    lineHeight: 18,
    paddingTop: 20,
  },
  userDisplay: {
    fontSize: 15,
    lineHeight: 18,
    paddingTop: 10,
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
    marginVertical: 5,
    fontSize: 18,
    lineHeight: 30,
    width: '100%',
    color: COLORS.primary,
    textAlign: 'center',
  },
});
