import { View, Text, StyleSheet } from 'react-native';


export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Explorar 🔍</Text>
      <Text style={styles.subtitle}>Aquí mostraré contenido en el futuro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#0ff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});
