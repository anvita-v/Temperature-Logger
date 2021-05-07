import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';

const MyHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#fff'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#fff', fontSize:20,fontWeight:"bold", } }}
      backgroundColor = "#8BE4F0"
    />
  );
};

export default MyHeader;
