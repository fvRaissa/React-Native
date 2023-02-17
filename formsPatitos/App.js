import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import {useState} from 'react';
import { CheckBox, TextInput } from 'react-native-web';
import Estilo from './estilos/Estilos.js'
//import  CheckBox  from "expo-CheckBox";

export default function App(){
  const [nome,setNome] = useState("");
  const [endereco,setEndereco] = useState("");
  const [telefone,setTelefone] = useState("");
  const [email,setEmail] = useState("");
  const [motivo,setMotivo] = useState("")
  const [aceito,setAceito] = useState(false)
  const [sexo,setSexo] = useState("feminino")

  
  
  return (
    
    <View style={Estilo.container}>

       
      <Image
      style  = {{borderWidth:2, height: 160, width:'100%',borderColor:'#947F4F' }}
      source={require ( './assets/patos.jpg' )}
      />
      <Text style={Estilo.textoTitulo}>🦆Quack Quack🦆</Text>        
        
      <View style={Estilo.bordar}>
        <Text>Dados pessoais ( •ө• )</Text>
        <TextInput 
        placeholder={'Digite seu Nome'}
        style ={Estilo.textInput}
        value={nome}
        onChangeText={text=>setNome(text)}
        />

        <TextInput 
        placeholder={'Digite seu Endereço'}
        style ={Estilo.textInput}
        value={endereco}
        onChangeText={text=>setEndereco(text)}
        />

        <TextInput 
        placeholder={'Digite seu Telefone'}
        style ={Estilo.textInput}
        value={telefone}
        onChangeText={text=>setTelefone(text)}
        />

        <TextInput 
        placeholder={'Digite seu email'}
        style ={Estilo.textInput}
        value={email}
        onChangeText={text=>setEmail(text)}
        />

        <TextInput 
        placeholder={'Porque você se acha digno de um pato?'}
        style ={Estilo.textInput}
        value={motivo}
        onChangeText={text=>setMotivo(text)}
        />

        <View style={{flexDirection:"row"}}>
        
          <CheckBox
            value={aceito}
            onValueChange={()=>setAceito(!aceito)}
            color={aceito?"#4630EB":undefined}
            style={{marginTop: 9.5}}
            />
          <Text style={{margin:8}}>Aceito as regras da união quack</Text>
        </View>

        <Text style={{marginTop:15}}>Sexo</Text>
        <select 
          value={sexo}
          onChange={text=>setSexo (text.target.value)}
          style={{ height:40, width:'100%', borderWidth:1, borderRadius:10, marginTop:5}}>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
          <option value="Outros">Outros</option>

        </select>
        
        

      </View>
      <View style ={Estilo.bordar}>
        <h1>Resultados</h1>
        <Text style={Estilo.resultado}> Nome : {nome} </Text>
        <Text style={Estilo.resultado}> Endereço : {endereco} </Text>
        <Text style={Estilo.resultado}> Telefone : {telefone} </Text>
        <Text style={Estilo.resultado}> Email: {email} </Text>
        <Text style={Estilo.resultado}> Motivo : {motivo} </Text>
        <Text style={Estilo.resultado}> Sexo: {sexo} </Text>
        <Text style={Estilo.resultado}> Aceito: {aceito?"Sim":"Não"}</Text>
      </View>
      

    </View>

    
  );
}

const styles = StyleSheet.create({

  bordar:{
    borderColor:'#695A4E',
    borderRadius: 10,
    borderWidth: 3,
    margin:5,
    padding:5,
  
  },

  checkboxContainer:{
    flexDirection: "row",
    marginBottom :1,
  },
  checkbox:{
    alingSelf: "center",
  }
});






   
