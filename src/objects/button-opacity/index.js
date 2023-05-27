import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style'

export default function Button({txtButton, handlePress}) {
  return(
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>
          {txtButton}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
