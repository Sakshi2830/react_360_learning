import React from 'react';
import {
  AppRegistry,
 Image,asset,
  View,
  Text,
} from 'react-360';

export default class welcomeTo360 extends React.Component {
  render() {
    return (
      <View 
      style={{
        backgroundColor:'rgba(255,255,255,0.4)',
        width:1000,
        height:600
      }}
      >
        <Image source={asset('nature.jpg')}
        style={{
          width:1000,
          height:600
        }}
        >
          <Text style={{
            color: 'black',
            fontSize:20,
            fontWeight:'bold',
            justifyContent:'center',
            alignItems: 'center'
          }}>
            Fuck you Bitches 🖕
          </Text>
        </Image>
       
      </View>
    );
  }
};

  

AppRegistry.registerComponent('welcomeTo360', () => welcomeTo360);
