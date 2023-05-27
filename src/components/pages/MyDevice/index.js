import React from 'react';
import { View } from 'react-native';
import ListEspecificacoes from '../../../objects/listEspecificacoes'
import ReturnButton from '../../../objects/returnButton'
import styles from './style'

export default function MyDevice({navigation}) {
  return (
    <View style={styles.background}>
      <ReturnButton texto="Meu dispositivo" handlePress={() => navigation.goBack()}/>
      <ListEspecificacoes/>
    </View>
  );
}
