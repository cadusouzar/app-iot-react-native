import React from 'react';
import { View } from 'react-native';
import styles from './style'

export default function ContainerMiddle({children}) {
  return(
    <View style={styles.containerMiddle}>
      {children}
    </View>
  )
}