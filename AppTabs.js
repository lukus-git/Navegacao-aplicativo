import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Screens/HomeScreen";
import CalculadoraScreen from "./Screens/CalculadoraScreen";
import IMCScreen from "./Screens/IMCScreen";

const Tab = createBottomTabNavigator()

export default function App(){
 return(
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home'
          component={HomeScreen} 
          options={{
            title: 'Início',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons  color={color} size={size} />
            )
          }}
          />

        <Tab.Screen name='Calculadora' component={CalculadoraScreen}
          options={{
            title: 'Calculadora',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons  color={color} size={size} />
            )
          }}
        />
        
        <Tab.Screen name='IMC' component={IMCScreen}
          options={{
            title: 'IMC',
            TabBarIcon: ({color, size}) => (
              <MaterialIcons color={color} size={size} />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}