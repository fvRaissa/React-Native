import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import React, {Component} from "react";
import { LinearGradient } from 'expo-linear-gradient';
import {useState} from "react";


export default function App() {


  const [imagemj, setImagemj] = useState(0);
  const [imagemc, setImagemc] = useState(0);
  const [pontosj, setPontosj] = useState(0);
  const [pontosc, setPontosc] = useState(0);
  

  function novoJogo(){
    setImagemj(0)
    setImagemc(0)
    setPontosj(0)
    setPontosc(0)
  }

  function exibir(numero){
    if(numero==0){
      return(<Image 
      source={require('./assets/cubo.gif')}  
      style={{width: 100, height: 110,marginLeft:10,marginTop:30 }}
    />)
    }else if(numero==1){
      return(<Image
      style={{  padding: 10, 
        height: '80%', 
        width: '100%',
        resizeMode: 'stretch'}}
      source={require('./assets/pedra.png')}/>)
    }else if (numero==2){
      return(<Image
      style={{  padding: 10, 
        height: '80%', 
        width: '100%',
        resizeMode: 'stretch'}}
      source={require('./assets/papel.png')}/>)
    }else {
      return(<Image
        style={{  padding: 10,  
          height: '80%', 
          width: '100%', 
          resizeMode: 'stretch'}}
        source={require('./assets/tesoura.png')}/>)
    }
  }

  function jogar(numero){
    setImagemj(numero)
    let imgAleatorio = Math.floor(Math.random() * 3+1);
    setImagemc(imgAleatorio)

   if(numero == 2 && imgAleatorio == 1){
    setPontosj  (pontosj+1);
    } else if(numero == 3 && imgAleatorio == 2){
      setPontosj  (pontosj+1);
    }else if(numero == 1 && imgAleatorio == 3){
      setPontosj  (pontosj+1);
    } else if(imgAleatorio == 2 && numero == 1){
      setPontosc  (pontosc+1);
    } else if(imgAleatorio == 3 && numero == 2){
      setPontosc  (pontosc+1);
    }else if(imgAleatorio == 1 && numero == 3){
      setPontosc  (pontosc+1);
    } else {
      
    }
  }




  return (
    <View style={styles.container}>
        <View style={styles.div1}>
          <View style={styles.circulo}>
         
            <Image
            style  = {{marginTop:'35%',height:'29%', width:'80%', alignItems:'center'}}
            source={require ( './assets/JO KEN PÔ.png' )}
            />

            <Text style={styles.placar}>Placar</Text>
            <View style={styles.divPontos}>
              <View style={styles.pontos}>
                <Text style={{fontSize:70, marginLeft:'50%',fontFamily:'Comic Sans MS, Comic Sans, cursive',
              fontStyle:'italic'}}>{pontosj}</Text>
              </View>
              <View style={styles.pontos}>
                <Text style={{fontSize:70, marginLeft:'25%',fontFamily:'Comic Sans MS, Comic Sans, cursive',
              fontStyle:'italic'}}>{pontosc}</Text>
              </View>
            </View>

          </View>

        </View>
        <View style={styles.div2}>
          <View style={styles.cubo}>
            {exibir(imagemj)}
          </View>
          <View style={styles.vs}>
            <Image 
              source={require('./assets/vs.png')}  
              style={{width: 68, height: 150,marginLeft:30,marginTop:20}}
            />
          </View>
          <View style={styles.cubo}>
          {exibir(imagemc)}
          </View>
        </View>

        <View style={styles.div3}>
          <LinearGradient
          colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
          start={{x:0,y:1}}
          end={{x:1,y:1}}
          style={{ height: 48, width: 280, alignItems: 'center', justifyContent: 'center',
           width: 280, borderRadius:20,marginTop:15,marginLeft:45}}>
            <TouchableOpacity style={styles.botao} onPress={()=>novoJogo()}>
              <Text style={styles.textoBotao} >Nova partida</Text>
            </TouchableOpacity>
          </LinearGradient>

         
        </View>
        <View style={styles.div4}>
          <TouchableOpacity style={styles.opcoes} activeOpacity={0.5} onPress={()=>jogar(1)}>
              <Image
              style={{  padding: 10, 
                height: '80%', 
                width: '100%',
                resizeMode: 'stretch'}}
              source={require('./assets/pedra.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcoes} activeOpacity={0.5} onPress={()=>jogar(2)}>
              <Image
              style={{  padding: 10, 
                height: '80%', 
                width: '100%',
                resizeMode: 'stretch'}}
              source={require('./assets/papel.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcoes} activeOpacity={0.5}onPress={()=>jogar(3)}>
              <Image
              style={{  padding: 10,  
                height: '80%', 
                width: '100%', 
                resizeMode: 'stretch'}}
              source={require('./assets/tesoura.png')}/>
          </TouchableOpacity>
        </View>
        </View>
  );
}





//css

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  div1 : { 
    height:'38%',
    backgroundColor:'#001024',
    borderWidth:-1
  },
  circulo:{
    width:'110%',
    height:'158%',
    backgroundColor:'#D9D9D9',
    margin: 50,
    borderRadius:'50%',
    alignItems:'center',
    marginTop:-147,
    marginLeft:-18,
    marginRight:-18
  },
  placar:{
    fontSize:30,
    fontFamily:'Comic Sans MS, Comic Sans, cursive',
    marginTop:-25,
    fontStyle:'italic',
    fontWeight:'bold'
  },
  divPontos:{
    flex:1,
    width:'100%',
    flexDirection:'row',
  },
  pontos:{
    flex:1,
  },
  div2: {
    flex: 1, 
    height:102,
    flexDirection:'row',
    backgroundColor:'#001024',
    borderWidth:-1,
  },
  cubo:{
    flex:1,
  },
  vs:{
    flex:1,

  },
  div3: { 
    height:'12%', 
    backgroundColor:'#001024',
    borderWidth:-3,
  },
  botao:{
    width: 273,
    height:43,
    alignItems: 'center',
    backgroundColor:'white',
    borderRadius:20
  },
  textoBotao: {
    textAlign: 'center',
    color: '#4C64FF',
    padding: 7,
    marginLeft: 1,
    marginRight: 1,
    width: 200,
    fontSize:22,
    fontWeight:'bold'
    
  },
  div4: {
    borderWidth:-1,
    height:'23%', 
    backgroundColor:'#001024',
    flex:1,
    flexDirection:'row'
  },
  opcoes:{
    flex:1,
    flexDirection: 'row', 
    alignItems: 'center',
    height: '90%', 
    borderRadius: 5, 
    margin: 5
  },

});
