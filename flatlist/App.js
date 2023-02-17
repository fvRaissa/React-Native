import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-web";
import Estilo from './estilos/estilo';

const aluno = [
  {
    id: 1,
    nome:  'Maria',
    idade: '20 anos'
  },
  {
    id: 2,
    nome:  'Jose',
    idade: '30 anos'
  },
  {
    id: 3,
    nome:  'Maria',
    idade: '20 anos'
  }
]

return (
    <View style={Estilo.container}>
    <FlatList
    data={alunos}
    renderItem={({item}) =>
      <View style={Estilo.teste}>
          <Text>id: {item.id} </Text>
          <Text>id: {item.nome} </Text>
          <Text>id: {item.idade} </Text>
      </View>}
      />
      <StatusBar style="auto" />
    </View>
)
