import React, { Component } from 'react';
import { View, Text, StyleSheet,} from 'react-native';
import { StatusBar } from "expo-status-bar";
// const Login = ({navigation})=>{

//   function navigate(){
//     navigation.navigate('Signup');
//     }

//     return(
//       <View style ={StyleSheet.mainView}>
//           <View style = {StyleSheet.TopView}></View>
//           <View style = {StyleSheet.BottonView}></View>
//       </View>
//     )
// }

// const styles = StyleSheet.create({
//   mainView:{
//     marginTop: 20,
//     flex :1,
    
//   }
// })

// export default LoginScreen =()=> {
//     return (
//       <View>
//         <Text> Login </Text>
//       </View>
//     );
// }


export default function HomeScreen({navigation}) {
console.log({navigation});
    console.log("home");
    const navigateTologin = ()=>{
      navigation.navigate("Login")
    }
  return (
    <View >
      <TouchableOpacity onPress={navigateTologin} style={{backgroundColor:'red', width:100, padding:10,borderRadius:15}}>
        <Text>send me to login</Text>
      </TouchableOpacity>
    <Text>This is home</Text>
    <Button
    title="wdhuw"
    ></Button>

    </View>
  );
}
