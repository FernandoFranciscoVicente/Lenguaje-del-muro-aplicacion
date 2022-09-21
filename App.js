import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Principal from './src/screens/Principal'
import Desdicatoria from './src/screens/Dedicatoria'
import Contenido from './src/screens/Contenido'
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


function PrincipalScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Principal</Text>
    </View>
  );
}

function DedicatoriaScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dedicatoria!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Principal" component={PrincipalScreen} />
        <Tab.Screen name="Dedicatoria" component={DedicatoriaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}