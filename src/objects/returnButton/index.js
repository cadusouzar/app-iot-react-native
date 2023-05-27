import React from "react";
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './style'

function ReturnButton({handlePress, texto}){
  return(
    <View style={styles.containerBackground}>
      <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Icon name="arrow-back" size={30} style={styles.icon}/>
        <Text style={styles.texto}>{texto}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ReturnButton