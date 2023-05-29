
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';




import Home from './src/pages/Home'
import Professor from './src/pages/Professor'
import Aluno from './src/pages/Aluno'

import consulProf from './src/pages/consulProf'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home}
        options={{title:'',
        headerTransparent:true,
        headerShown:false
        }}
        />
        
        <Stack.Screen name="Professor" component={Professor}
         options={{title:'',
         headerTransparent:true,
         headerShown:false}}/>

        <Stack.Screen name="Aluno" component={Aluno}
         options={{title:'',
         headerTransparent:true,
         headerShown:false}}/>

        <Stack.Screen name="consulProf" component={consulProf}
         options={{title:'',
         headerTransparent:true,
         headerShown:false}}/>
        
         

      </Stack.Navigator>
    </NavigationContainer>
  );
}
