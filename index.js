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
      <View>
        <Image source={asset('nature.jpg')}
        style={{
          width:1500,
          height:300,
          
          
        }}
        >
          <Text style={{
            color: 'black',
            fontSize:20,
            fontWeight:'bold',
            justifyContent:'center',
            alignItems: 'center'
          }}>
            supp Bitches 🖕
          </Text>
        </Image>
       
      </View>
    );
  }
};

  

AppRegistry.registerComponent('welcomeTo360', () => welcomeTo360);
