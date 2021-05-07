import React from 'react';
import {View, Image} from 'react-native';

export default class Doctor extends React.Component {
  render() {
    return (
      <View> 
        <Image source={require("../assets/doctor.png")} style={{width:200, height:200, marginRight: 60}} /> 
      </View>

    )
  }
}
