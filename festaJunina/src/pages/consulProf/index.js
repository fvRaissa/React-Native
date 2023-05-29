import 'react-native-gesture-handler';
import { useEffect ,useState } from 'react'; 
import { ActivityIndicator,Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function consulProf() {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    const getProfessores = async () => {
       try {
        // Escola
        // const response = await fetch('http://localhost:8080/projeto-evento/professor-json.php');
        // Casa
        const response = await fetch('http://localhost/projeto-evento/professor-json.php');
        const json = await response.json();
        setData(json.professor);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    useEffect(() => {
        getProfessores();
      }, []);

    

    return (

        <View style={{ flex: 1, padding: 24 }}>

        <View>
            <Text> Professores Cadastrados </Text>
        </View>

        {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor={({ idProfessor }, index) => idProfessor}
            renderItem={({ item }) => (
                <Text>{item.idProfessor}, {item.nomeProfessor}</Text>
            )}
            />
        )}
        </View>
    );
}
