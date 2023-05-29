
import { StatusBar } from 'expo-status-bar'; 
import { ActivityIndicator ,Text, View, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function Home() {

    const [fontsLoaded] = useFonts({
        OpenSans: require("./../../../assets/fontes/OpenSans-VariableFont_wdth,wght.ttf"),
       
      })
    const navigation = useNavigation();
    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.div1}>
                <Image
                source={require('./../../../assets/bandeirinhas2.png')}
                style={{width:'100%',height:'28%'}}/>

                
            

                
                
                
            </View>

            <View style={styles.div2}>
            <Image
                source={require('./../../../assets/profs.png')}
                style={{width:'60%',height:'50%',alignSelf:'center',marginTop:'-56%'}}
                />
                    <Image
                    source={require('./../../../assets/oqFazer.png')}
                    style={{width:'58%',height:'15%',alignSelf:'center',marginTop:'5%'}}
                    />
                <View style={styles.botões}>

                    <TouchableOpacity  onPress={ () => navigation.navigate('Professor')}
                    style={styles.botão}>
                        <Text style={styles.nomeBtn}>Cadastrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => navigation.navigate('consulProf')}
                    style={styles.botão}>
                        <Text style={styles.nomeBtn}>Consultar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={ () => navigation.navigate('Home')}
                    style={styles.botãoVoltar}>
                        <Text style={styles.nomeBtn}>←</Text>
                    </TouchableOpacity>

                   
                </View>
                <Image
                    source={require('./../../../assets/cerquinha.png')}
                    style={{width:'100%',height:'18%',alignSelf:'center'}}/>
                    
            </View>
        </SafeAreaView>
    );
}
