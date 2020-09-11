import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'

import Dot from '../../components/Dot'
import SizeButton from '../../components/SizeButton'

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Sandro Torres'
  })

  return(
    <ScrollView style={styles.container}>
      <Image 
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View>
        <View>
          <Text style={[styles.title, { fontSize: 24 } ]}>R$ 280,90</Text>
        </View>
        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30 } ]}>Nike Sandro Torres</Text>
        </View>

        <View style={styles.dotsContainer}>
          <Dot color="#2379F4" />
          <Dot color="#FB6E53" />
          <Dot color="#DDD" />
          <Dot color="#000" />
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181A" color="#FFF">40</SizeButton>
            <SizeButton>37</SizeButton>
            <SizeButton>39</SizeButton>
            <SizeButton>42</SizeButton>
          </ScrollView>
        </View>


      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%'
  },
  title: {
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotsContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  }
})