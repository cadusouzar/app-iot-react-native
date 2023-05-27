import React, { Component } from 'react';
import { View } from 'react-native';
import Icone from '../../objects/icones';
import styles from './style'

export default function Footer({navigation}) {
  return(
    <View style={styles.containerFooter}>
      <Icone handlePress={() => navigation.navigate("Gases")} url={require('../../images/propane.png')}/>
      <Icone handlePress={() => navigation.navigate("Chama")} url={require('../../images/fire.png')}/>
      <Icone handlePress={() => navigation.navigate("Dispositivo")} url={require('../../images/devices.png')}/>
      <Icone handlePress={() => navigation.navigate("Conta")} url={require('../../images/account.png')}/>
    </View>
  )
}
