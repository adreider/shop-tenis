import React from "react";
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Dot({ color }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
    </View>
  )
}