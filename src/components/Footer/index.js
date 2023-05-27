import React from 'react';
import { View } from 'react-native';
import Icone from '../../objects/icones';
import IconeProfile from '../../objects/iconeProfile';
import styles from './style'

export default function Footer({navigation, nome, gasMedido}) {
  return(
    <View style={styles.containerFooter}>
      <Icone handlePress={() => navigation.navigate("Gases", {gasAtual: gasMedido})} url={require('../../images/propane.png')}/>
      <Icone handlePress={() => navigation.navigate("Chama")} url={require('../../images/fire.png')}/>
      <Icone handlePress={() => navigation.navigate("Dispositivo")} url={require('../../images/devices.png')}/>
      <IconeProfile handlePress={() => navigation.navigate("Conta", {nomeLogado: nome})} url={require('../../images/account.png')}/>
    </View>
  )
}
