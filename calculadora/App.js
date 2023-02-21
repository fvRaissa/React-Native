import React,{useState} from 'react';
import {Text,View,TextInput,StyleSheet, TouchableOpacity,Image} from 'react-native';
import Style from './styles/Style';
import { useFonts } from 'expo-font'; //esse treco aqui vai importar as fontes que to usando

//como usar outras fontes?
//1-- usar esse cod no cmd ou terminl "npx expo install expo-font"
//2-- baixar as fontes desejadas no google fonts e por aqui na pasta
//3-- importar as fontes la em cima (4° linha de import)
//5--criar uma const para carregar as fontes

let estados={
  valorTela:'', /* valor digitado na tela para ser calculado*/
  resultado:0,  /* resultado da operação*/
  operado:false, /* vai significar quando a operação ta completa para poder calcular*/
  ponto:false /* vai ser pra indicar se ja colocou ponto ou não*/
}

export default function App(){

  //const para carregar as fontes, só declarar o nome q quer usar e o endereço
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/WorkSans-Regular.ttf"),
    light: require("./assets/fonts/WorkSans-Light.ttf"),
    bold: require("./assets/fonts/WorkSans-SemiBold.ttf")
  })

  const [valorTela, setValorTela] = useState(estados.valorTela)
  const [valorRes, setValorRes] = useState(estados.resultado)

  
  const adDigito=(digito)=>{

    // 2
    //não pode por o poonto duas vezes
    if(digito=='.' && !estados.ponto){
      estados.ponto=true
      estados.operado=false
    }else if (digito=='.' && estados.ponto){
      return
    }

    // 3
    //se digitou alguma dessa operações ai sim vai poder usar o ponto dnv
    if(digito== '+' || digito == '-' || digito == '/' || digito == '*' ){
      estados.ponto=false
    }

    // 4
    //se eu terminei a conta mas quero fazer uma conta com o resultao dessa que fiz
    //ele vai passar o resultado para a area da conta e vai continuar com o resul zerado
    if((digito== '+' || digito == '-' || digito == '/' || digito == '*' ) && estados.operado){
      estados.valorTela=estados.resultado
      estados.resultado=0
    }

    // 1
    /*Adiciona um digito e junta ao outro */
    estados.valorTela=estados.valorTela+digito
    setValorTela(estados.valorTela)
    setValorRes(estados.resultado)
    estados.operado=false
  }

  //const pra limpar tudo (AC)
  const limparTela=()=>{
    estados={
      valorTela:'', 
      resultado:0,  
      operado:false, 
      ponto:false 
    }
    setValorTela(estados.valorTela)
    setValorRes(estados.resultado)
  }


  //vai vetificar se foi clicado o AC, =  OU <-
  const opera=(digito)=>{
    if(digito =='AC'){ 
      //vai chamar a função de limpar
      limparTela()
      return
    }
    //vai apagar o ultimo
     if(digito == 'BS'){
      estados.valorTela=valorTela.substring(0,(valorTela.length-1)) 
      //o estado vai receber = o vt, vai criar uma subString que vai usar (valorInicial,(ultimoValor - 1))
      // ou seja a subString vai copiar a string normal porem com um digito a menos
      setValorTela(estados.valorTela)
    }
    //vai fazer as continhas ihull
    try{
      estados.resultado=eval(estados.valorTela)
      //o lindo do eval faz as conta sozinho S2
      estados.operado=true
      setValorRes(estados.resultado)
    }catch{
      //isso é pra quando digitar coisa errada
      estados.resultado="Erro"
      estados.operado=true
      setValorRes(estados.resultado)
    }
  }
  

  
  return(
    //fundo
     <View style={Style.container}> 
     
      {/* tela de operacao e resultado */}
      <View style={Style.div1}> 
          <Text style={Style.operacao}
            numberOfLines={2}>
              {valorTela}
          </Text>

          <Text style={Style.resultado}
          numberOfLines={1}>
            {valorRes}
          </Text>

      </View>

      <View style={Style.ondas}>
        <Image
        style={{width:"107%", height:"100%",marginLeft:"-7%",marginBottom:"-25%",elevation: "10%",elevationColor:'black'}}
        source={require('./assets/ondulado.png')}/>
      </View>

      {/* area dos botões */}
      <View style={Style.div2 }> {/*A div sera alinhada em colunas e as colunas em linhas*/} 
      
        

        <View style={Style.linha1}> {/*linha dos botões */}
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>opera('AC')} > 
            <Text style={Style.txtBotaoL1} >AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>adDigito('(')}> 
            <Text style={Style.txtBotaoL1} >(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>adDigito(')')}> 
            <Text style={Style.txtBotaoL1} >)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>adDigito('/')}> 
            <Text style={Style.txtBotaoL1} >÷</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.linha}> {/*linha dos botões */}
          <TouchableOpacity style={Style.botao} onPress={()=>adDigito('7')}> 
            <Text style={Style.txtBotao} >7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('8')}> 
            <Text style={Style.txtBotao} >8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('9')}> 
            <Text style={Style.txtBotao} >9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao}  onPress={()=>adDigito('*')}> 
            <Text style={Style.txtBotao} >x</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.linha}> {/*linha dos botões */}
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('4')}> 
            <Text style={Style.txtBotao} >4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('5')}> 
            <Text style={Style.txtBotao} >5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('6')}> 
            <Text style={Style.txtBotao} >6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>adDigito('-')}> 
            <Text style={Style.txtBotao} >-</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.linha}> {/*linha dos botões */}
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('1')}> 
            <Text style={Style.txtBotao} >1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('2')}> 
            <Text style={Style.txtBotao} >2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('3')}> 
            <Text style={Style.txtBotao} >3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>adDigito('+')}> 
            <Text style={Style.txtBotao} >+</Text>
          </TouchableOpacity>
        </View>

        <View style={Style.linha}> {/*linha dos botões */}
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>opera('BS')}> 
            <Text style={Style.txtBotao} >←</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botao}  onPress={()=>adDigito('0')}> 
            <Text style={Style.txtBotao} >0</Text >
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>adDigito('.')}> 
            <Text style={Style.txtBotao} >.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.botaoExpressao} onPress={()=>opera('=')}> 
            <Text style={Style.txtBotao} >=</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>

  );
}
