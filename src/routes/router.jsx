import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Datail } from '../screens/Datail';

const Stack = createStackNavigator();

export function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name='Datail' 
          component={Datail} 
          options={{
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }}>
                  <Feather
                  name="shopping-cart"
                  size={24}
                  color="black"
                  />
              </TouchableOpacity>  
            )
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

