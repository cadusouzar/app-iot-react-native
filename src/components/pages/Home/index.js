import React, { Component, useState } from 'react';
import { View, Text } from 'react-native';
import Menu from '../../Menu';
import Footer from '../../Footer';
import styles from './style';
import { useRoute } from '@react-navigation/native';

export default function Home({ navigation }) {
  const [nomeLogado, setNomeLogado] = useState('');
  const route = useRoute();
  
  // Movido para dentro do escopo da função
  useState(() => {
    setNomeLogado(route.params?.nomeLogado);
  }, []);
  
  return (
    <View style={styles.home}>
      <Menu nome={nomeLogado}/>
      <Footer navigation={navigation} nome={nomeLogado}/>
    </View>
  );
}
