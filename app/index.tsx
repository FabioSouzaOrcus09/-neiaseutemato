import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function Index() {
  const [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('http://10.0.2.2:3000/login', {  // Use o IP local ou o emulador para Android
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        // Login bem-sucedido
        router.push('/principal'); // Redireciona para a tela principal
      } else {
        // Login falhou
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao tentar fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={Styles.container}>
      {!fontsLoaded ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View style={Styles.form}>
          <Text style={Styles.titulo}>Login</Text>
          <Text style={Styles.label}>RM</Text>
          <TextInput
            placeholder="Digite seu RM"
            style={Styles.input}
            keyboardType="email-address"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={Styles.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={Styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Pressable style={Styles.botao} onPress={handleLogin} disabled={loading}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={Styles.botaoTexto}>ENTRAR</Text>
            )}
          </Pressable>
          {error && <Text style={Styles.error}>{error}</Text>}
          <Text style={Styles.txt}>Esqueceu a senha?</Text>
          <Text style={Styles.cadastro} onPress={() => router.push('/cadastro')}>
            Trocar senha
          </Text>
        </View>
      )}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  form: {
    width: 300,
    height: 500,
  },

  titulo: {
    fontFamily: 'Medium',
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 56,
  },

  label: {
    fontFamily: 'Light',
    fontSize: 20,
    fontWeight: '400',
    marginBottom: 6,
  },

  botao: {
    width: 300,
    height: 50,
    color: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 12,
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    elevation: 5,
  },

  botaoTexto: {
    fontFamily: 'SemiBold',
    fontSize: 21,
    color: 'white',
  },

  input: {
    fontFamily: 'Light',
    fontSize: 16,
    height: 44,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 31,
  },

  txt: {
    marginTop: 32,
    fontFamily: 'Regular',
    fontSize: 16,
  },

  cadastro: {
    fontSize: 16,
    fontFamily: 'Regular',
    color: '#0146F6',
  },

  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
  },
});
