import React, { useState } from 'react';
import {View,StyleSheet,Text,Button,TextInput,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';


function LoginScreen({navigation}){

  const [user,setUser] = useState()
  const [senha,setSenha] = useState()

  const verificar=()=>{
    if (user == 'Adm' && senha == '123') {
      navigation.navigate('Home')
    }
  }
    
 

  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
      style={styles.cxTexto}
      placeholder='User'
      autoFocus={true}
      keyboardType={'text'}
      onChangeText = {text=>setUser(text)}
      />

      <TextInput
      style={styles.cxTexto}
      placeholder='Senha'
      keyboardType={'text'}
      onChangeText = {text=>setSenha(text)}
      />

      <Button
        title="Login"
        onPress={() =>verificar()}
      />
    </View>
  )
}

function HomeScreen({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <TouchableOpacity
        style={styles.butNav}
        onPress={() =>navigation.navigate('Barbie')}>
          <text style={styles.butTxt}>Barbie</text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.butNav2}
        onPress={() =>navigation.navigate('Ben 10')}>
          <text style={styles.butTxt}>Ben 10</text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.butNav3}
        onPress={() =>navigation.navigate('Osmar')}>
          <text style={styles.butTxt}>Osmar</text>
      </TouchableOpacity>

      <Button
        title="Logout"
        onPress={() =>navigation.navigate('Login')}
      />
    </View>
  );
}

function Barbie({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
      source={require('./assets/barbie.jpg')}
      style={{flex:2,width:"100%", height:"25%"}}/>

      <View style={{flex:4}}> 
        <Text style={styles.texto}>Barbie embarca em aventuras com amigos e familiares, incluindo Ken. De viagens de carro a travessuras de
        irmãs, ela descobre que pode ser qualquer coisa com um pouco de ajuda e muitas risadas.
        </Text>
      </View>

    </View>
  )
}

function Ben10({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
      source={require('./assets/ben10.jpg')}
      style={{flex:2,width:"100%", height:"25%"}}/>

      <View style={{flex:4}}> 
        <Text style={styles.texto}>Um garoto de 10 anos de idade descobre um dispositivo mágico que pode transformá-lo em 10 heróis 
        alienígenas diferentes, cada um com habilidades únicas. Com este novo poder, o menino ajuda as pessoas e combate malfeitores.
        </Text>
      </View>
    </View>
  )
}

function Osmar({navigation}){
  return(
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
      source={require('./assets/osmar.jpg')}
      style={{flex:2,width:"100%", height:"25%"}}/>

      <View style={{flex:4}}> 
        <Text style={styles.texto}>A série conta a história do primogênito das fatias do pão de forma, aquela que sempre fica pra trás
         e acaba menosprezada por sua casca avantajada. Em seu panificado mundo, Osmar busca digerir com bom humor os bolos que 
         leva e os caldos que toma
        </Text>
      </View>
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default function App(){

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/WorkSans-Regular.ttf"),
    light: require("./assets/fonts/WorkSans-Light.ttf"),
    bold: require("./assets/fonts/WorkSans-SemiBold.ttf")
  })

  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Barbie" component={Barbie}/>
          <Stack.Screen name="Ben 10" component={Ben10}/>
          <Stack.Screen name="Osmar" component={Osmar}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  cxTexto:{
    width:'90%',
    height:35,
    borderColor:'black',
    borderWidth:1,
    borderRadius:5,
    marginBottom:'10%',
    paddingLeft:'2%',
  },
  butNav:{
    width:'90%',
    height:'20%',
    marginBottom:'5%',
    backgroundColor:'#ED3A85',
    borderRadius:10
  },
  butNav2:{
    width:'90%',
    height:'20%',
    marginBottom:'5%',
    backgroundColor:'#1A9F3C',
    borderRadius:10
  },
  butNav3:{
    width:'90%',
    height:'20%',
    marginBottom:'5%',
    backgroundColor:'#D49D31',
    borderRadius:10
  },
  butTxt:{
    textAlign:'center',
    fontSize:30,
    fontFamily:'regular',
    marginTop:'13%',
    
  },
  texto:{
    fontFamily:'light',
    fontSize:20,
    marginLeft:'3%',
    marginTop:'3%'
  }

})
