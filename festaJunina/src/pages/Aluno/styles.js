import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#a6a6a6",
    },

    menu: {
        backgroundColor: '#0b4d30',
        width: '100%',
        height: 80,
        justifyContent: "center",
        alignItems: "center",
    },

    logo:{
        position: "absolute",
        width: 80,
        height: 80, 
        marginRight: 280,
    },

    tituloMenu: {
        width: 200,
        height: 50, 
        resizeMode: 'stretch',
    },

    configuracao: {
        position: "absolute",
        width: 60,
        height: 60, 
        marginLeft: 110,
        marginTop: -55,
    },

    botao:{
        backgroundColor: '#0b4d30',
        width: 150,
        height: 50,
        borderRadius: 25,
        margin: 10,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    
    botaoTxt:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a6a6a6',
    },

    opcoes: {
        width: 150,
        height: 150,
        margin: 12,
        resizeMode: 'stretch',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "#f9a01b",
    },

    alinhamento: {
        margin: 10,
        flex: 1, 
        flexDirection: 'row',  
        alignItems: 'center', 
        justifyContent: 'center', 
    },

    texto:{
        position: "absolute",
        margin: 30,
        marginTop: 120,
        fontSize: 20,
        color: "#f9a01b",
        fontWeight: "bold",
        textAlign: "center",
    },
})