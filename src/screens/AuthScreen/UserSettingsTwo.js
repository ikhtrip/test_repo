import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default UserSettings2 = () => {
  const navigation = useNavigation()

  return (
    
    <View style={styles.container}>
     

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Text style = {styles.profile}>User Settings</Text>
    </View>
      <TouchableOpacity style={styles.activebtn}>
        <Text style={styles.ProfileText}>User Profile </Text> 
      </TouchableOpacity> 
 
      <Text style={styles.ActiveText}>Email</Text> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="aslam@tripai.io"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 

      <Text style={styles.ActiveText}>Name</Text> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Aslam Khan"
          placeholderTextColor="#003f5c"
          
        /> 
      </View> 
      <Text style={styles.ActiveText}>Phone</Text> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="+91 9876543210"
          placeholderTextColor="#003f5c"
          
        /> 
      </View> 

      <Text style={styles.ActiveText}>Organisation</Text> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="TripAI"
          placeholderTextColor="#003f5c"
          
        /> 
      </View> 

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Change Password?</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.Historybtn}>
        <Text style={styles.ProfileText}>Auditor Settings </Text> 
      </TouchableOpacity> 

      <StatusBar style="auto" />

      <TouchableOpacity onPress={()=>{
        navigation.navigate("Dashboard")
      }} style={styles.updateBtn}>
        <Text style={styles.updateText}>Update</Text> 
      </TouchableOpacity> 
     

    </View> 
  );
}
const styles = StyleSheet.create({
ActiveText: {
    height: 35,
    padding:8,
    fontWeight: 'bold',
    fontSize:14,

  },
  ProfileText: {
    height: 45,
    padding:9,
    fontWeight: 'bold',
    fontSize:16,

  },
updateText: {

    borderRadius: 25,
    height: 50,
    fontWeight: 'bold' ,
    color: "#ffffff",
 
  },  
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: "100%",
    height: 35,
    marginBottom: 0,
    
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 9,
    
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginTop: 10,
    color: "#2187d0",
    marginRight:50,
   
  },

updateBtn: {
    width: "99%",
    borderRadius: 28,
    height: 35,
    alignItems: "center",
    backgroundColor: "#121111",
    padding:12,
    fontWeight: 'bold' ,
    marginRight: 0,
    marginBottom:45,
    marginEnd: 25,


  },
 
profile: {
    marginBottom: 40,
    fontSize: 23,
    fontSyle: "TimesNewRoman",
    fontWeight: 'bold' ,
    marginRight: 30,
    marginTop: 25,

  },

activebtn: {
    borderRadius: 18,
    height: 40,
    padding: 9,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#e8e8e2",
    width: "100%",
    marginleft: 55,
    marginRight: 155,
    marginBottom: 10,
  },
Historybtn: {
    width: "100%",
    borderRadius: 48,
    height: 40,
    padding: 8,
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#e8e8e2",
    marginBottom: 110,
    borderRadius: 18,
  },
 
 
});
