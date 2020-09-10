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
    minHeight: 400,
  },
  mainformRow: {
    height: 300,
  },
  formRow: {
    margin: 10,
    height: 45,
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
    color: COLORS.primary,
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
