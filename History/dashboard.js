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

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    
    <View style={styles.container}>
       <TouchableOpacity>
        <Text style={styles.profile}>Profile</Text> 
      </TouchableOpacity> 
      <Image style={styles.image} source={require("./src/assets/audit .png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="My Dashboard."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Manage_Audits"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Settings"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Audit Logs"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 


      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="My Qualifications"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
     
  
    

      <TouchableOpacity style={styles.loginbtn}>
        <Text style={styles.DeactivateText}>Deactivate</Text> 
      </TouchableOpacity> 


      <TouchableOpacity style={styles.GoogleloginBtn}>
        <Text style={styles.loginText}>Logout</Text> 
      </TouchableOpacity> 


  

    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 25,
    width: "80%",
    height: 35,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 30,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    fontSize: 20,
    fontSyle: "TimesNewRoman",
    marginRight: 150,
  },

  profile: {
    height: 30,
    marginBottom: 30,
    fontSize: 25,
    fontSyle: "TimesNewRoman",
    
    marginRight: 30,
  },
  loginbtn: {
    width: "20%",
    borderRadius: 8,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#ece3e3",
  },
  GoogleloginBtn: {
    width: "20%",
    borderRadius: 8,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#cd1515",
  },
  AppleloginBtn: {
    width: "60%",
    borderRadius: 8,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#cd1515",
  },
});
