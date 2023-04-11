import {View,StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

export default function Menu(){
    return(
          <View style={styles.subContainer2}>
            <TouchableOpacity style={styles.bnt}>
              <Image
              source={require('../assets/casa.png')}
              style={styles.img}/>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.bnt}>
              <Image
              source={require('../assets/logout')}
              style={styles.img}/>
            </TouchableOpacity>

           
          </View>
    );
  }

  const styles = StyleSheet.create({

    subContainer2:{
      flex:2,
    //   backgroundColor:'red',
      backgroundColor:'#EBEBEB',
      height:'6%',
      flexDirection:'row',
      paddingLeft:'5%',
      
    },
    bnt:{
      // backgroundColor:'green',
      height:'100%',
      width:'22%',
      marginLeft:'17%',
      alignItems:'center'
    },
    img:{
      width:'50%', 
      height:'75%', 
      marginTop:'5%', 
      // marginLeft:'24%',
      // backgroundColor:'red'
  
    }
  
  });