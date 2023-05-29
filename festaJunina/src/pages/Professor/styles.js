import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF5CF",
    },
    div1:{
        flex:2,
        width:'100%',
        // backgroundColor:'blue'
    },
    enfeite:{
        flex:2,
        flexDirection:'row',
        justifyContent: 'flex-end',
        // backgroundColor:'red'
    },
    div2:{
        flex:3,
        width:'100%',
        backgroundColor:'#FFCC00',
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    botões:{
        flex:1,
        //  
        justifyContent:'center', //vertical
        alignItems:'center' //Horizontal
    },
    botão:{
        backgroundColor:'#865005',
        marginBottom:'6%',
        width:'68%',
        height:'19%',
        borderRadius:10,
        justifyContent:'center', //vertical
    },

    nomeBtn:{
        textAlign:'center',
        fontSize:25,
        color:'white',
        fontFamily:'OpenSans',
        fontWeight:'bold',
        fontSize:22,
       
    },

    botãoVoltar:{
        backgroundColor:'#865005',
        marginBottom:'6%',
        width:'19%',
        height:'19%',
        borderRadius:100,
        justifyContent:'center',
       
    },
    
})