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
// export default LoginScreen =()=> {

//     return (
//       <View>
//         <Text> Login </Text>
//       </View>
//     );
// }
export default MyAuditScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    
    <View style={styles.container}>
      <Text style={styles.profile}>My Audits</Text> 

      
      <TouchableOpacity style={styles.activebtn}>
        <Text style={styles.ActiveText}>Active </Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.Historybtn}>
        <Text style={styles.ActiveText}>History </Text> 
      </TouchableOpacity> 

      <Text style={styles.heading}>Ongoing Audits</Text>  

      <Text style={styles.heading3}>Ongoing Audit Name</Text> 
      <Text style={styles.heading3}>Organisation Name</Text> 
      <Text style={styles.heading3}>Completed 50%</Text> 
      <Text style={styles.heading4}>Auditor: John Doe</Text>


      <Text style={styles.heading}>Scheduled Audits</Text>
      <Text style={styles.heading3}>Ongoing Audit Name </Text>
      <Text style={styles.heading3}>Organization Name </Text>
      <Text style={styles.heading3}>Audit Date: 15-09-2023 </Text>
      <Text style={styles.heading4}>Auditor: John Doe</Text>

      <Text style={styles.heading3}>Ongoing Audit Name </Text>
      <Text style={styles.heading3}>Organization Name </Text>
      <Text style={styles.heading3}>Audit Date: 18-09-2023 </Text>
      <Text style={styles.heading4}>Auditor: John Doe</Text>  

      <Text style={styles.heading3}>Ongoing Audit Name </Text>
      <Text style={styles.heading3}>Organization Name </Text>
      <Text style={styles.heading3}>Audit Date: 22-09-2023 </Text>
      <Text style={styles.heading4}>Auditor: John Doe</Text>  

      <StatusBar style="auto" />
     
      

      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="User Settings"

          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>  */}

      {/* <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Audit Logs"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>  */}

{/* 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="My Qualifications"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>  */}
     
  
    
{/* 
      <TouchableOpacity style={styles.loginbtn}>
        <Text style={styles.DeactivateText}>Deactivate</Text> 
      </TouchableOpacity> 


      <TouchableOpacity style={styles.GoogleloginBtn}>
        <Text style={styles.loginText}>Logout</Text> 
      </TouchableOpacity>  */}


  

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
    marginBottom: 0,
    fontSize: 25,
    fontSyle: "TimesNewRoman",
    marginTop:10,
    
    marginRight: 30,
  },
  heading: {
    width: "90%",
    height: 30,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 15,
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    fontSyle: "TimesNewRoman",
    marginTop: 5,
    backgroundColor: "#e8ca9ffb",
    marginRight: 0,
    marginBottom: 10,
  },
 
  heading3: {
    height: 30,
    borderRadius: 3,
    marginBottom: 0,
    fontSize: 13,
    height: 28,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 70,
    fontSyle: "TimesNewRoman",
    
    backgroundColor: "#eaebe7fb",
    

  },
  heading4: {
    height: 30,
    borderRadius: 3,
    marginBottom: 20,
    marginTop: 0,
    marginLeft: 12,
    fontSize: 12,
    height: 25,
    padding: 5,
    fontSyle: "TimesNewRoman",
    backgroundColor: "#eaebe7fb",
    

  },
  activebtn: {
    width: "20%",
    borderRadius: 8,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#1bbc30",
  },
  Historybtn: {
    width: "20%",
    borderRadius: 8,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#8f9d91",
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
