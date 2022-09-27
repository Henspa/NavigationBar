import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= 'Home'
          component={HomeScreen}
          options={{
            title: 'My home',
            headerTitle: 'My sweet home'
          }}
        />
        <Stack.Screen
          name= 'Profile'
          component={ProfileScreen}
          options={{
            title: 'Second',
            headerTitle: 'Second'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const HomeScreen = ({navigation}) => {

  const [message, useMessage] = useState('Testing');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f0f0f0'
      },
      headerRight: () => (
        <AntDesign
        style={styles.navButton}
        name="arrowright"
        size={24}
        onPress= {() => navigation.navigate('Second', {message: message})}
        />
      )
    })
  }, [message])

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='Profile' onPress={() => navigation.navigate('Profile') }></Button>
    </View>
  );
}

const ProfileScreen = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButton: {
    marginRight: 5,
    padding: 4,
  }
});
