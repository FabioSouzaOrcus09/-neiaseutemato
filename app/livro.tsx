import { Text, View, TextInput, StyleSheet, Pressable, Image, FlatList, ScrollView} from "react-native";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function Livro() {

    const [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    });

    if (!fontsLoaded) {
      return <Text>Carregando...</Text>;
    }

  const router = useRouter();


  const { titulo = 'Título não encontrado', imagem, autor, descricao } = useLocalSearchParams(); // useLocalSearchParams é usado aqui

  return (
    <View style={Styles.container}>
      <View style={Styles.topo}>
        <Pressable style={Styles.voltar} onPress={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} />
        </Pressable>
        <Text style={Styles.titulo}>Detalhes</Text>
      </View>
      {imagem ? (
        <Image source={{ uri: imagem }} style={Styles.imagem} resizeMode="cover" />
      ) : (
        <Text>Imagem não disponível</Text>
      )}
      <Text style={Styles.tituloLivro}>{titulo}</Text>
      <Text style={Styles.autorLivro}>{autor}</Text>
      <Text style={Styles.descricao}>{descricao}</Text>
      <View style={Styles.botoes}>
        <Pressable style={Styles.botao1}>
          <FontAwesomeIcon icon={faHeart} size={30} />
        </Pressable>
        <Pressable style={Styles.botao2}>
          <Text style={Styles.txtBotao}>RESERVAR</Text>
        </Pressable>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create ({
    container: {
        flex:1,
        width: "100%",
        alignItems: "center"
    },

    topo: {
        marginTop: 20,
        width: '90%',
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40
    },

    voltar: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: 100,
        borderWidth: 0,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },

    titulo: {
        fontFamily: "Regular",
        fontSize: 27,
        marginLeft: 30
    },

    imagem: {
        width: 155, 
        height: 250, 
        borderRadius: 10, 
        boxShadow: '0px 3px 20px rgba(0, 0, 0, 0.35)',
        elevation: 6,
        marginBottom: 20
    },

    tituloLivro: {
        fontFamily: "Medium",
        fontSize: 27
    },

    autorLivro: {
        fontFamily: "Light",
        fontSize: 14,
        marginBottom:15
    },

    descricao: {
        width: "80%",
        fontFamily: "Regular",
        fontSize: 14,
        textAlign: "justify",
        marginBottom: 25
    },

    botoes: {
        position: "absolute",
        left:"10%",
        bottom: 30,
        right:"10%",
        width: "80%",
        height: 70,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
    },

    botao1: {
        width: "20%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 100,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.30)',
        elevation: 6,
    },

    botao2: {
        width: "75%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.30)',
        elevation: 4,
        borderRadius: 15
    },

    txtBotao: {
        fontSize: 20,
        color: "white",
        fontFamily: "Medium"
    }
})