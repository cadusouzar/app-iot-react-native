import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function IconeProfile({url, handlePress}) {
  return(
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image 
        source={url}
        style={{width: 35, height: 35, borderRadius: 50}}
        />
      </TouchableOpacity>
    </View>

  )
}