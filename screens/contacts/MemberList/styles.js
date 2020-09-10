/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

import { COLORS } from '../../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    borderColor: COLORS.lightGrey,
    borderBottomWidth: 1,
  },
  listText: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 18,
    lineHeight: 20,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  grid: {
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    maxHeight: '25%',
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
});
