import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#F0F1F5'
    },

    div1:{
        flex:1,
        backgroundColor:'transparent',
        
    },
    operacao:{
        fontSize:30,
        fontFamily:'regular',
        textAlign:'right',
        marginRight:'3%',
        marginBottom:'-20%',
        marginTop:'30%'
    },
    resultado:{
        fontSize:52,
        fontFamily:'bold',
        textAlign:'right',
        marginRight:'3%',
        marginTop:'26%',
        marginBottom:'-20%'
    },
    ondas:{
        backgroundColor:'transparent',
        width:'100%',
        height:'15%',
        bottom:"-4%",
        elevation:1
    },
    div2:{
        flex:2,
        backgroundColor:'#ffffff',
        height:'65%',
        flexDirection:'column'
    },

    linha1:{
        height:"14%",
        flexDirection:'row',
        marginTop:"7%",
        marginLeft:"1%"
    },
    linha:{
        height:"17.5%",
        flexDirection:'row',
        marginTop:"2%",
        marginLeft:"1%"
    },
    botaoExpressao:{
        marginLeft:"2%",
        marginRight:"1%",
        borderColor:'#7FC3DC',
        borderWidth:'2px',
        borderRadius:15,
        width:"21.5%",
        height:"90%",
        alignItems:'center',
        
    },
    botao:{
        marginLeft:"2%",
        marginRight:"1%",
        borderColor: 'grey',
        borderWidth:'2px',
        borderRadius:15,
        width:"21.5%",
        height:"90%",
        alignItems:'center',
        
        
    },

    txtBotaoL1:{
        fontSize:33,
        fontFamily:'regular',
        textAlign:'center',
        marginTop:"5%"
     },

    txtBotao:{
       fontSize:33,
       fontFamily:'regular',
       textAlign:'center',
       marginTop:"14%"
    }
})
