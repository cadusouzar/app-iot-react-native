import React from "react";
import { View } from "react-native";
import Conta from "../../Conta";
import styles from './style'

export default function Account({navigation}){
  return(
    <View style={styles.background}>
      <Conta navigation={navigation}/>
    </View>
  )
}