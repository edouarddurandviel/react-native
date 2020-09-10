/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Message({message, side}) {
  const isLeftSide = side === 'left';

  const containerStyles = isLeftSide
    ? styles.container
    : flattenedStyles.container;
  const textContainerStyles = isLeftSide
    ? styles.textContainer
    : flattenedStyles.textContainer;
  const textStyles = isLeftSide
    ? flattenedStyles.leftText
    : flattenedStyles.rightText;

  return (
    <View style={containerStyles}>
      <View style={textContainerStyles}>
        <Text style={textStyles}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    width: 'auto',
    maxWidth: '80%',
    backgroundColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginLeft: 10,
  },
  rightContainer: {
    justifyContent: 'flex-end',
  },
  rightTextContainer: {
    backgroundColor: 'tomato',
    marginRight: 10,
    color: 'white',
  },
  leftText: {
    textAlign: 'left',
  },
  rightText: {
    textAlign: 'right',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
});

const flattenedStyles = {
  container: StyleSheet.flatten([styles.container, styles.rightContainer]),
  textContainer: StyleSheet.flatten([styles.textContainer, styles.rightTextContainer]),
  leftText: StyleSheet.flatten([styles.leftText, styles.text]),
  rightText: StyleSheet.flatten([styles.rightText, styles.text]),
};

export {
  styles,
  flattenedStyles,
};

