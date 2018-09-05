import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,pic}from 'react-native';

import Judul from './Components/Judul';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
        <Judul/>
        <Image source={pic} style={{width: 193, height: 110}}></Image>      
        <Text style={styles.instructions}>NAMA  : Aditya Nur Hidayatullah</Text>
        <Text style={styles.instructions}>KELAS : XI-RPL-2</Text>
        <Text style={styles.instructions}>ABSEN : 01</Text>
        <Image style={{width: 450, height: 450}} 
        source={require('/Kelas11/KK4/Tararam1/adit.jpg')} />
      </View>     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 5,
    marginBottom: 5,
    color: '#0f0',
  },
  instructions: {
    fontSize: 15,
    textAlign: 'left',
    color: '#333333',
    marginBottom: 5,
    marginTop: 10,
  },
});
