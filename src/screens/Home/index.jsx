import React from 'react';

import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';

import { Shoes } from '../../components/Shoes';

export function Home() {

  const navigation = useNavigation();

  return (
    <View styles={styles.container}>

      <View style={styles.header}>

        <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={[styles.text, { color: '#cececf' }]}>TÊNIS</Text>
          <Text style={[styles.text, { color: '#cececf' }]}>-</Text>
          <Text style={styles.text}>MASCULINO</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.line} />

      <ScrollView
        contentContainerStyle={{ paddingTop: 0, paddingVertical: '75%', }}
      >
        <Text style={[styles.text, { textAlign: 'center', textDecorationLine: 'underline' }]}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} price="R$140,90" onClick={() => navigation.navigate('Datail')}>
            Nike Air Max Dia
          </Shoes>
          <Shoes img={require('../../assets/2.png')} price="R$280,90" onClick={() => navigation.navigate('Datail')}>
            Nike Downshifter 10
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} price="R$560,90" onClick={()=> alert('CLICOU')}>
            Nike Squidward Tentacles
          </Shoes>
          <Shoes img={require('../../assets/4.png')} price="R$220" onClick={()=> alert('CLICOU')}>
          Nike Epic React Flyknit 2
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} price="R$120,90" onClick={()=> alert('CLICOU')}>
            Nike Joyride Run Flyknit
          </Shoes>
          <Shoes img={require('../../assets/6.png')} price="R$920" onClick={()=> alert('CLICOU')}>
            Nike Air Max Dia Sujeito Programador
          </Shoes>
        </View>

      </ScrollView>
    </View>
  )
}
