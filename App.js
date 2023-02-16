
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './src/navigation/StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
    <StackNavigator/>
  </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
    
//     <View style={styles.container}>
//        <TouchableOpacity>
//         <Text style={styles.profile}>Manage Audits</Text> 
//       </TouchableOpacity> 
    
//       <StatusBar style="auto" />

//       <View style={styles.ImportAudit}>
//         <TextInput
//           style={styles.Import}
//           placeholder="Import Audits"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 
//       <Image style={styles.image} source={require("./src/assets/audit-logo.png")} /> 

    

//       <View style={styles.createauditinputView}>
//         <TextInput
//           style={styles.CreateAuditTextInput}
//           placeholder="Create Audit"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 
//       <Image style={styles.image} source={require("./src/assets/create2.png")} /> 

//       <View style={styles.MergeAuditinputView}>
//         <TextInput
//           style={styles.MergeAuditTextInput}
//           placeholder="Merge Audit"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 
     
//       <Image style={styles.image} source={require("./src/assets/merge-audit.png")} /> 
    
//       <View style={styles.ListAuditinputView}>
//         <TextInput
//           style={styles.ListAuditTextInput}
//           placeholder="List Audit"
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 

//       <Image style={styles.image} source={require("./src/assets/list-audits.png")} /> 

  


//     </View> 
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ADD8E6.",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     marginBottom: 10,
//     marginTop: 10,
//     marginRight: 0,
//   },
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 35,
//     width: "50%",
//     height: 35,
//     marginBottom: 60,
//     alignItems: "center",
//     marginRight: 134,
//     alignItems: "center",
    
//   },
//   createauditinputView: {
//     backgroundColor: "#ADD8E6.",
//     borderRadius: 65,
//     width: "38%",
//     height: 35,
//     marginTop:0,
//     alignItems: "center",
//     marginRight: 4,
    
//   },
//   MergeAuditinputView: {
//     backgroundColor: "#ADD8E6.",
//     borderRadius: 35,
//     width: "38%",
//     height: 35,
   
//     alignItems: "center",
//     marginRight: 0,
//     alignItems: "center",
//   },
//   ListAuditinputView: {
//     backgroundColor: "#ADD8E6.",
//     borderRadius: 35,
//     width: "38%",
//     height: 35,
   
//     alignItems: "center",
//     marginRight: 0,
//     alignItems: "center",
//   },
//   ImportAudit: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 65,
//     width: "35%",
//     height: 35,
//     alignItems: "center",
//     marginRight: 0,
    
   
//   },
//   TextInput: {
//     height: 30,
//     flex: 1,
//     padding: 10,
   
//     marginRight: 50,
//   },
//   CreateAuditTextInput: {
//     height: 30,
//     flex: 1,
//     padding: 5,
//     marginRight: 50,
//   },
//   MergeAuditTextInput: {
//     height: 30,
//     flex: 1,
//     padding: 5,
//     marginRight: 50,
//   },
//   ListAuditTextInput: {
//     height: 30,
//     flex: 1,
//     padding: 5,
//     marginRight: 50,
//   },
//   forgot_button: {
//     height: 50,
//     marginBottom: 80,
//     fontSize: 20,
//     fontSyle: "TimesNewRoman",
//     marginRight: 150,
//   },

//   profile: {
//     height: 30,
//     marginBottom: 50,
//     fontSize: 23,
//     fontSyle: "TimesNewRoman",
//     marginTop: 50,
//     marginRight: 30,
//   },
//   loginbtn: {
//     width: "20%",
//     borderRadius: 8,
//     height: 35,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     backgroundColor: "#ece3e3",
//   },
//   GoogleloginBtn: {
//     width: "20%",
//     borderRadius: 8,
//     height: 35,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     backgroundColor: "#cd1515",
//   },
//   AppleloginBtn: {
//     width: "60%",
//     borderRadius: 8,
//     height: 35,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 20,
//     backgroundColor: "#cd1515",
//   },
// });



/*
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/