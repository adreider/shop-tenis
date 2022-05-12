import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function SizeButton({ bgColor, children }) {
  return (
    <View style={[styles.container, { backgroundColor: bgColor || '#888888',}]}>
      <Text style={styles.text}>
        {children}
      </Text>
    </View>
  )
}