/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import {COLORS} from '../../styles';

export default StyleSheet.create({
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
    borderColor: COLORS.GREY,
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
