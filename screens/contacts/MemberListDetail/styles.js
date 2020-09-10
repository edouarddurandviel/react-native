/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import { COLORS } from '../../../theme';

export default StyleSheet.create({
  grid: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    maxHeight: '100%',
  },
  picture: {
    color: 'tomato',
  },
  title: {
    height: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    paddingLeft: 10,
  },
  description: {
    fontSize: 15,
    lineHeight: 18,
    width: '100%',
  },
  beer: {
    color: COLORS.primary,
  },
  beerRow: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  map: {
    width: '100%',
    height: '100%',
    flex: 1,
   },
});
