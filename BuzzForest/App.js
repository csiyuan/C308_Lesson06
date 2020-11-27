import React from 'react';
import {View, ImageBackground, Image, Text, StyleSheet} from 'react-native';
import {Section} from './Section.js';
const BuzzForest = () => {
  return (
    <View>
      <View style={[styleApp.header]}>
        <Text style={[styleApp.headerWords]}>BuzzForest</Text>
      </View>
      <ImageBackground
        source={require('./images/rainforest_bg.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={[styleApp.view]}>
          <Image
            source={require('./images/orangutan.jpg')}
            style={{width: '100%', height: '30%'}}
          />
          <Section />
        </View>
        <View style={[styleApp.footer]}>
          <Text style={[styleApp.footerWords]}>CopyRight</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styleApp = StyleSheet.create({
  view: {
    padding: 15,
  },
  headerWords: {
    padding: 15,
    fontWeight: 'bold',
    color: '#3f300e',
    fontSize: 15,
  },
  header: {
    width: '100%',
    height: 50,
    backgroundColor: '#e1ddaa',
    textAlign: 'left',
  },
  footer: {
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
  },
  footerWords: {
    color: 'black',
  },
});
export default BuzzForest;
