
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

                <Image
                source={require('./../../../assets/titulo1.png')}
                style={{width:'42%',height:'35%',alignSelf:'center',marginTop:'-3%', marginLeft:'-6%'}}
                />

                <Image
                source={require('./../../../assets/balão.png')}
                style={{width:'25%',height:'35%',alignSelf:'flex-end',marginTop:'-30%'}}
                />

                <Image
                source={require('./../../../assets/escola.png')}
                style={{width:'80%',height:'15%',alignSelf:'center',marginTop:'0%'}}/>
                
                
                <View style={styles.enfeite}>
                <Image
                source={require('./../../../assets/cacto.png')}
                style={{width:'14%',height:'100%', marginRight:'10%',alignSelf:'flex-end'}}
                />
                </View>
                
                
            </View>

            <View style={styles.div2}>
                <Image
                    source={require('./../../../assets/fogueira.png')}
                    style={{width:'14%',height:'25%',marginLeft:'10%',marginTop:'-22%'}}
                    />

                    <Image
                    source={require('./../../../assets/quem-chegou.png')}
                    style={{width:'58%',height:'10%',alignSelf:'center',marginTop:'5%'}}
                    />
                <View style={styles.botões}>

                    <TouchableOpacity  onPress={ () => navigation.navigate('Professor')}
                    style={styles.botão}>
                        <Text style={styles.nomeBtn}>Professor</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => navigation.navigate('Aluno')}
                    style={styles.botão}>
                        <Text style={styles.nomeBtn}>Aluno</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => navigation.navigate('Aluno')}
                    style={styles.botão}>
                        <Text style={styles.nomeBtn}>Convidado</Text>
                    </TouchableOpacity>

                   
                </View>
                <Image
                    source={require('./../../../assets/cerquinha.png')}
                    style={{width:'100%',height:'18%',alignSelf:'center'}}/>
                    
            </View>
        </SafeAreaView>
    );
}
