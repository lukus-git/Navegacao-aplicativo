import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from "./Screens/HomeScreen";
import CalculadoraScreen from "./Screens/CalculadoraScreen";
import IMCScreen from "./Screens/IMCScreen";

const Stack = createStackNavigator()

export default function AppStack(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Calculadora' component={CalculadoraScreen} />
        <Stack.Screen name='IMC' component={IMCScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}