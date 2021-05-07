import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class TempLog extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      temp1:"",
      temp2:"",
      temp3:"",
      temp4:"",
      temp5:"",
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Temperature Log" navigation ={this.props.navigation}/>

          <Text style = {{alignItems: 'center', color: '#F06767', fontSize: 15, marginTop: 40, marginLeft: 60, marginRight: 50}}> Please record your temperature for 5 days. On the 5th day come back to the app and enter your temperature for all five days to check if you can go back to school or not. </Text>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter Day 1 Temperature in F"}
                onChangeText={(text)=>{
                    this.setState({
                        temp1:text
                    })
                }}
                value={this.state.temp1}
              />
              
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter Day 2 Temperature in F"}
                onChangeText={(text)=>{
                    this.setState({
                        temp2:text
                    })
                }}
                value={this.state.temp2}
              />

              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter Day 3 Temperature in F"}
                onChangeText={(text)=>{
                    this.setState({
                        temp3:text
                    })
                }}
                value={this.state.temp3}
              />

              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter Day 4 Temperature in F"}
                onChangeText={(text)=>{
                    this.setState({
                        temp4:text
                    })
                }}
                value={this.state.temp4}
              />

              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter Day 5 Temperature in F"}
                onChangeText={(text)=>{
                    this.setState({
                        temp5:text
                    })
                }}
                value={this.state.temp5}
              />
              
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{

                if(this.state.temp5 >=99){
                    Alert.alert("Your temperature is too high. Do not go to school yet. Make sure to visit a doctor.")
                }
                else{
                  Alert.alert("Yay! You are free to go back to school now!")
                }
                }}
                >
                <Text style = {{color: '#fff'}}>Check</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#8BE4F0",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
