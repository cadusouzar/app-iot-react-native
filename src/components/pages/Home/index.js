import React, { Component } from 'react';
import { View } from 'react-native';
import Menu from '../../Menu';
import Footer from '../../Footer';
import styles from './style';

export default function Home({navigation}) {
  return(
    <View style={styles.home}>
      <Menu/>
      <Footer navigation={navigation}/>
    </View>
  )
}