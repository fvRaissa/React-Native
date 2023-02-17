import React,{useState} from 'react';
import {Text,View,TextInput,Button,Alert,StyleSheet, TouchableOpacity} from 'react-native';

export default function Aplicacao(){

  const [n1,setN1] = useState()
  const [n2,setN2] = useState()
  const [n3,setN3] = useState()
  const [n4,setN4] = useState()
  const [resultado,setResultado] = useState()

  const soma = ()=>{
    const r = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4)
    setResultado(r)
  }

  const media = ()=>{
    const s = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) 
    const m = s / 4
    setResultado(m)
  }

  const multi = ()=>{
    const m = parseInt(n1) * parseInt(n2) * parseInt(n3) * parseInt(n4) 
    setResultado(m)
  }

  const sub = ()=>{
    const s = parseInt(n1) - parseInt(n2) - parseInt(n3) - parseInt(n4) 
    setResultado(s)
  }
  function msg(){
    Alert.alert('Título','Msg show ')
  }
  
  return(
        <View style={styles.tudo}>

          <View>
            <Text style={styles.titulo}> operações com quatro valores </Text>
          </View>
          
            <View style={{margin:15}}>
              <Text style={styles.subTxt}> Primeiro número:  </Text>          
              <TextInput              
                style={styles.caixaDeTexto}
                placeholder='Digite aqui o primeiro número'
                placeholderTextColor='#A9A7AA'
                autoFocus={true}
                keyboardType={'numeric'}

                onChangeText = {text =>setN1(text)}
              />            
            </View>           

            <View style={{margin:15}}>
              <Text style={styles.subTxt}> Segundo número:  </Text>          
              <TextInput
                style={styles.caixaDeTexto}
                placeholder='Digite aqui o segundo número'
                placeholderTextColor='#A9A7AA'              
                keyboardType={'numeric'}

                onChangeText = {text =>setN2(text)}
              />            
            </View>          

            <View style={{margin:15}}>
              <Text style={styles.subTxt}> Segundo número:  </Text>          
              <TextInput
                style={styles.caixaDeTexto}
                placeholder='Digite aqui o terceiro número'
                placeholderTextColor='#A9A7AA'              
                keyboardType={'numeric'}

                onChangeText = {text =>setN3(text)}
              />            
            </View>

            <View style={{margin:15}}>
              <Text style={styles.subTxt}> Segundo número:  </Text>          
              <TextInput
                style={styles.caixaDeTexto}
                placeholder='Digite aqui o quarto número'
                placeholderTextColor='#A9A7AA'              
                keyboardType={'numeric'}

                onChangeText = {text =>setN4(text)}
              />            
            </View>
          
          
          <View>
            <TouchableOpacity style={styles.botao} onPress={()=>soma()}>
              <Text style={styles.txtbotao}> Soma dos numeros </Text>
            </TouchableOpacity>
          </View>
           
          <View>
            <TouchableOpacity style={styles.botao} onPress={()=>media()}>
              <Text style={styles.txtbotao}> Media dos numeros </Text>
            </TouchableOpacity>
          </View>

          
          <View>
            <TouchableOpacity style={styles.botao} onPress={()=>multi()}>
              <Text style={styles.txtbotao}> Multiplicação dos numeros </Text>
            </TouchableOpacity>
          </View>

          
          <View>
            <TouchableOpacity style={styles.botao} onPress={()=>sub()}>
              <Text style={styles.txtbotao}> Subtração dos numeros </Text>
            </TouchableOpacity>
          </View>

          <View style={{margin:15}}>
              <Text style={styles.resposta}> Rescultado: {resultado}  </Text>
          </View>
          
        </View>
  );
}

const styles = StyleSheet.create({

  tudo:{
    backgroundColor:'#320B65',
    height:'100%'

  },

  titulo:{
    color:'#fff',
    fontSize:30,
    textAlign:'center',
    marginTop:25,
    marginBottom:10,
    fontFamily:'Candara',
    fontWeight:'600'
    
  },

  

  subTxt:{
    color:'white',
    fontSize:'105%'
  },

  caixaDeTexto:{
    borderWidth:2,
    borderColor:'#030006',
    color:'#0ff',
    borderRadius:40,
    paddingLeft: 25,
    height:60,
    marginTop:7    
  },

  resposta:{
    color:'#fff',
    fontSize:25,
    textAlign:'center',
    marginTop:30
  },

  botao:{
    width: '85%',
    height:43,
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius:10,
    marginLeft:'7%',
    marginTop:'5%'
  }, 

  txtbotao:{
    textAlign: 'center',
    color: '#4C64FF',
    padding: 7,
    marginLeft: 1,
    marginRight: 1,
    fontSize:18,
    fontWeight:'bold'
  }
});