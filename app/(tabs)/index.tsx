import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';



export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Gianina 🚀</Text>
      <Text style={styles.subtitle}>Bienvenida a tu primera app con Expo Router</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/about')}
      >
        <Text style={styles.buttonText}>Ir a About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: '#61dafb',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
