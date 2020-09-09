import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function Shoes() {
  return(
    <TouchableOpacity style={styles.container}>

      <Image 
        source={require('../../assets/1.png')}
        style={styles.shoesImg}
      />

      <Text style={styles.shoesText}>
        Nike Shox 10
      </Text>
      <View opacity={0.4}>
      <Text style={styles.shoesText}> R$190,00 </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shoesImg: {
    width: 175,
    height: 175
  },
  shoesText: {
    fontSize: 16
  }
})