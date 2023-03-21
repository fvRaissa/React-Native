import React from 'react';
import {View,StyleSheet,Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({navigation}){
  
  // const verificar=()=>{
  //   navigation.navigation('Details')
  // }

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Details"
        onPress={() =>navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to home"
        onPress={() =>navigation.navigate('Home')}
      />
      <Button
        title="Go to pagina 3"
        onPress={() =>navigation.navigate('pg3')}
      />
    </View>
  );
}

function pagina3({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pagina 3</Text>
      <Button
        title="Go to home"
        onPress={() =>navigation.navigate('Home')}
      />
      <Button
        title="Go to pagina 4"
        onPress={() =>navigation.navigate('pg4')}
      />
    </View>
  )
}

function pagina4({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pagina 3</Text>
      <Button
        title="Go to home"
        onPress={() =>navigation.navigate('Home')}
      />
      <Button
        title="Go to pagina 5"
        onPress={() =>navigation.navigate('pg5')}
      />
    </View>
  )
}

function pagina5({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Pagina 3</Text>
      <Button
        title="Go to home"
        onPress={() =>navigation.navigate('Home')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
          <Stack.Screen name="pg3" component={pagina3}/>
          <Stack.Screen name="pg4" component={pagina4}/>
          <Stack.Screen name="pg5" component={pagina5}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
