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

export default UserSettingsScreen = () => {
  return (
    
    <View style={styles.container}>
      {/* <Text style={styles.profile}>User Settings</Text>  */}

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Text style = {styles.profile}>User Settings</Text>
    </View>
      <TouchableOpacity style={styles.activebtn}>
        <Text style={styles.ActiveText}>User Profile </Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.Historybtn}>
        <Text style={styles.ActiveText}>Auditor Settings </Text> 
      </TouchableOpacity> 

      <StatusBar style="auto" />

      <TouchableOpacity style={styles.updateBtn}>
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

  },
updateText: {

    borderRadius: 25,
    height: 50,
    fontWeight: 'bold' ,
    color: "#ffffff",
 
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
    marginBottom: 30,
    fontSize: 23,
    fontSyle: "TimesNewRoman",
    fontWeight: 'bold' ,
    marginRight: 30,
    marginTop: 45,
  },

activebtn: {
    borderRadius: 18,
    height: 35,
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
    borderRadius: 8,
    height: 38,
    padding: 9,
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#e8e8e2",
    marginBottom: 430,
    borderRadius: 18,
  },
 
 
});
