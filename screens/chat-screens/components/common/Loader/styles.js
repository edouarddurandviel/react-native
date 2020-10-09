/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',

    top: 0,
    left: 0,

    height: '100%',
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBtn: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 68,
    width: 68,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msg: {
    height: '100%',
    width:'100%',
    alignContent: 'center',
    textAlignVertical: 'center',
    paddingHorizontal: 30,
    fontSize: 15,
    textAlign: 'center',
  },
});
