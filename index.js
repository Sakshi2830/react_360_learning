import React from 'react';
import {
  AppRegistry,
 Image,asset,
  View,
  Text,
} from 'react-360';
import flatSurface from './components/flatSurface';

export default class welcomeTo360 extends React.Component {
  render() {
    return (
      <View>
        <Image source={asset('nature.jpg')}
        style={{
          width:1000,
          height:600,
          
          
        }}
        />
      </View>
    );
  }
};

  

AppRegistry.registerComponent('welcomeTo360', () => welcomeTo360);
AppRegistry.registerComponent('flatSurface', () => flatSurface)
