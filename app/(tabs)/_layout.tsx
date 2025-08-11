import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return(
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#61dafb',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { backgroundColor: '#1a1a1a' }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({color,size}) => (
            <Ionicons name='home' color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({color,size}) => (
            <Ionicons name='information-circle' color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explorar',
          tabBarIcon: ({color,size}) => (
            <Ionicons name='search' color={color} size={size} />
          )
        }}
      />
    </Tabs>
  )
}