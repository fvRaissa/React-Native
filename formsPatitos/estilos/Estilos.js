import { StyleSheet } from "react-native";

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#DECE98',

    },

    textoCurso:{
        color:'#00f',
        fontSize:15,
    },

    textoTitulo:{
        fontSize: 25,
        textAlign:'center',
        fontWeight: 'bold',
    },

    bordar:{
        borderColor:'#695A4E',
        borderRadius: 10,
        borderWidth: 2,
        margin:5,
        padding:5,
    },

    textInput:{
        height:40,
        width:'100%',
        borderWidth:1, 
        borderRadius:10, 
        marginTop:10,
        paddingLeft:5,
        borderColor:'#695A4E',
    },

    resultado:{
        fontSize:18, 
        margin:1.5,
    }

})