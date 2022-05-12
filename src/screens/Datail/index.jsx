import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button } from '../../components/Button';
import { Dot } from '../../components/Dot';
import { Footer } from '../../components/Footer';
import { SizeButton } from '../../components/SizeButton';
import { styles } from './styles';

export function Datail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })

  return (
    <ScrollView styles={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
      />

      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
          <View style={styles.dotContainer}>
            <Dot color="#2379f4" />
            <Dot color="#fb6e53" />
            <Dot color="#ddd" />
            <Dot color="#000" />
          </View>

          <View>
            <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
          </View>
        </View>


        <View opacity={0.4}>
          <Text style={[styles.title, { fontSize: 30, textAlign: 'center' }]}>Nike Downshifter 10</Text>
        </View>

        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <SizeButton >
              43
            </SizeButton>
            <SizeButton >
              42
            </SizeButton>
            <SizeButton bgColor="#17181a">
              41
            </SizeButton>
            <SizeButton >
              40
            </SizeButton>
            <SizeButton >
              39
            </SizeButton>
            <SizeButton >
              38
            </SizeButton>
            <SizeButton>
              37
            </SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            Descrição
          </Text>
          <Text style={[styles.textContent, { color: '#616060' }]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Expedita quibusdam unde repellat soluta iusto laudantium amet asperiores culpa,
            laboriosam aliquam at inventore delectus dignissimos deserunt iste natus odit tenetur pariatur!
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

        <Button />

        <View style={styles.line} />

        <Footer></Footer>

      </View>
    </ScrollView>
  )
}

