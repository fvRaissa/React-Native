import React,{useState} from 'react';
import Menu from './componentes/menu';
import {Text,View,TextInput,Button,Alert,StyleSheet, TouchableOpacity, Image} from 'react-native';

export default function Aplicacao(){
  return(
    
    <View style={styles.container}>
      <View style={styles.subContainer}>
      </View>
        <Menu/>
        
     </View>
   );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  subContainer:{
    backgroundColor:'red',
    height:'94%'
  },

});
