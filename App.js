import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button } from 'react-native';

import Home from './Home';
import Update from './update'
export default function(){
  const Stack=createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{name:"Mahi", enroll:7}}/>

        <Stack.Screen
        name="Update"
        component={Update}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
function Home({ navigation ,route}) {
  const {item}=route.params;
  
  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> This is home{item}</Text>
      <Button
        title="Go to details page"
        onPress={() => navigation.navigate('Details')} />
    </View>
  );
}
function Details({ navigation,route }) {
  const {item}=route.params


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is Details Screens{item}</Text>
      <Button
        title="go details again"
        onPress={() => navigation.push("Details",{item:Math.floor(Math.random()*100)})} />

      <Button
        title="go home again"
        onPress={() =>{navigation.navigate("Home",{item:"A R rehman sabka baap"})}} />
      <Button
        title="go back"
        onPress={() => navigation.goBack({item:"Javed ali sabka chacha"})} />

    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  const [stackSize,setStackSize]=React.useState(0)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "WFH" }}
          initialParams={{item: " initial param " }} />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{item:"aja saanjh hui mujhe teri fikar dudndhla ayi meri nazar .. aja na :'("}} />

      </Stack.Navigator>


    </NavigationContainer>
  );
}

export default App;
*/