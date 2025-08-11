import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function AboutScreen(){
  const router = useRouter();
  const { mensaje } = useLocalSearchParams<{ mensaje?: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre LuminazenTest 🌟</Text>
      {mensaje && <Text style={styles.subtitle}>{mensaje}</Text>}
    
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.back()}
    >
      <Text style={styles.buttonText}>⬅ Volver</Text>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#f5c518',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
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
})