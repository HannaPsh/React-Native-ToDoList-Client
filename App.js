import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'; /* npm install @react-navigation/native --save */
import { createNativeStackNavigator } from '@react-navigation/native-stack'; /* npm i @react-navigation/stack   */
import React from 'react';
import Home from './components/Home';
import All from './components/All';
import AllDone from './components/AllDone';
import ItemsInProgress from './components/ItemsInProgress';
import Todo from './components/Todo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="All" component={All} />
        <Stack.Screen name="Todo" component={Todo} />
        <Stack.Screen name="ItemsInProgress" component={ItemsInProgress} />
        <Stack.Screen name="AllDone" component={AllDone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
