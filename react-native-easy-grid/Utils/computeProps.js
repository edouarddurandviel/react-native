import React from "react";
import { StyleSheet } from "react-native";
//import _ from 'lodash';

function computeProps(incomingProps, defaultProps) {
  // External props has a higher precedence
  var computedProps = {};

  incomingProps = { ...incomingProps}
  //_.clone(incomingProps);
  delete incomingProps.children;

  var incomingPropsStyle = incomingProps.style;
  delete incomingProps.style;

  // console.log(defaultProps, incomingProps);

  if (incomingProps) Object.assign(computedProps, defaultProps, incomingProps);
  else computedProps = defaultProps;

  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    var computedPropsStyle = {};
    computedProps.style = {};
    if (Array.isArray(incomingPropsStyle)) {
      incomingPropsStyle.forEach(function(style){
      // _.forEach(incomingPropsStyle, style => {
       // _.merge()
        if (typeof style == "number") {
          Object.assign(computedPropsStyle, StyleSheet.flatten(style));
        } else {
          Object.assign(computedPropsStyle, style);
        }
      });
    } else {
      if (typeof incomingPropsStyle == "number") {
        computedPropsStyle = StyleSheet.flatten(
          incomingPropsStyle
        );
      } else {
        computedPropsStyle = incomingPropsStyle;
      }
    }

    Object.assign(computedProps.style, defaultProps.style, computedPropsStyle);
  }

  // console.log("computedProps ", computedProps);

  return computedProps;
};

export default computeProps;
