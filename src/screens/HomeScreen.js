import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// export default function HomeScreen({navigation}) {
// console.log({navigation});
//     console.log("home");
//     const navigateTologin = ()=>{
//       navigation.navigate("Login")
//     }
//   return (
//     <View >
//       <TouchableOpacity onPress={navigateTologin} style={{backgroundColor:'red', width:100, padding:10,borderRadius:15}}>
//         <Text>send me to login</Text>
//       </TouchableOpacity>
//     <Text>This is home</Text>
//     <Button
//     title="Title "
//     ></Button>

//     </View>
//   );
// }

// export default function HomeScreen({navigation}) {
//   console.log({navigation});
//       console.log("home");
//       const navigateToMyAudits = ()=>{
//         navigation.navigate("MyAudits")
//       }
//     return (
//       <View >
//         <TouchableOpacity onPress={navigateToMyAudits} style={{backgroundColor:'red', width:100, padding:10,borderRadius:15}}>
//           <Text>send me to My Audits</Text>
//         </TouchableOpacity>
//       <Text>This is home</Text>
//       <Button
//       title="Title "
//       ></Button>
  
//       </View>
//     );
//   }

// export default function HomeScreen({navigation}){
//   console.log({navigation});
//       console.log("home");
//       const navigateToMyAudits = ()=>{
//         navigation.navigate("MyAudits")
//       }
//     return (
//       <View >
//         <TouchableOpacity onPress={navigateToMyAudits} style={{backgroundColor:'red', width:100, padding:10,borderRadius:15}}>
//           <Text>send me to My Audits</Text>
//         </TouchableOpacity>
//       <Text>This is home</Text>
//       <Button
//       title="Title "
//       ></Button>
  
//       </View>
//     );
//  }
// export default function HomeScreen({navigation}) {
//   console.log({navigation});
//       console.log("home");
//       const navigateToSettings = ()=>{
//         navigation.navigate("Settings")
//       }
//     return (
//       <View >
//         <TouchableOpacity onPress={navigateToSettings} style={{backgroundColor:'red', width:"100%", marginBottom: 30, marginTop: 50, padding:10,borderRadius:15}}>
//           <Text>send me to User Settings </Text>
//         </TouchableOpacity>
//       <Text>This is home</Text>
 
//       <Button
//       title="Title "
//       ></Button>
  
//       </View>
//     );
//   }

  export default function HomeScreen({navigation}) {
    console.log({navigation});
        console.log("home");
        const navigateToSettings2 = ()=>{
          navigation.navigate("Settings2")
        }
      return (
        <View >
          <TouchableOpacity onPress={navigateToSettings2} style={{backgroundColor:'red', width:"100%", marginBottom: 30, marginTop: 50, padding:10,borderRadius:15}}>
            <Text>send me to User Settings </Text>
          </TouchableOpacity>
        <Text>This is home</Text>
   
        <Button
        title="Title "
        ></Button>
    
        </View>
      );
    }
// export default function HomeScreen({navigation}) {
//   console.log({navigation});
//       console.log("home");
//       const navigateToDashboard = ()=>{
//         navigation.navigate("Dashboard")
//       }
//     return (
//       <View >
//         <TouchableOpacity onPress={navigateToDashboard} style={{backgroundColor:'red', width:100, padding:10,borderRadius:15}}>
//           <Text>send me to Dashboard</Text>
//         </TouchableOpacity>
//       <Text>This is home</Text>
//       <Button
//       title="Title "
//       ></Button>
  
//       </View>
//     );
//   }
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: '70%',
    justifyContent: "center",
  },
  TextInput: {
    height: 30,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
});
