import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import  { styles } from './styles';

export function Shoes({ img, children, price, onClick }) {

  function filterDescription(description) {
    if(description.length < 27) {
      return description;
    }

    return `${description.substring(0, 20)}...`
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onClick} >
      <Image
        source={img}
        style={styles.shoesImage}
      />
      <Text style={styles.shoesText}>
       {filterDescription(children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.shoesText}>{price}</Text>
      </View>
    </TouchableOpacity>
  )
}
