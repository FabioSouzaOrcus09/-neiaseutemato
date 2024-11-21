import { Text, View, StyleSheet, Pressable, Image, ScrollView} from "react-native";
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';
import { useRouter} from 'expo-router';
import CaixaFavoritos from '@/components/CaixaFavoritos'


export default function Favoritos() {

    const [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    });

    
  
  const router = useRouter();

  const favoritos = [
    {
        urlImagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg',
        titulo: 'Mestres do Tempo',
        descricao: 'Uma aventura épica no controle do tempo.',
    },
    {
        urlImagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg',
        titulo: 'Mestres do Tempo',
        descricao: 'Uma aventura épica no controle do tempo.',
    },
    {
        urlImagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg',
        titulo: 'Mestres do Tempo',
        descricao: 'Uma aventura épica no controle do tempo.',
    },


    ];

  return (
    <View style = {Styles.container}>
        <View style = {Styles.topo}>
            <Pressable style = {Styles.voltar} onPress={() => router.back()}>
                <FontAwesomeIcon icon={faArrowLeft} size={30} />
            </Pressable>
            <Text style = {Styles.titulo}>Favoritos</Text>
        </View>
        <ScrollView contentContainerStyle = {Styles.favoritos}>
                {favoritos.map((item, index) => (
                    <CaixaFavoritos
                        key={index}
                        urlImagem={item.urlImagem}
                        titulo={item.titulo}
                        descricao={item.descricao}
                    />
                ))}
        </ScrollView>

    </View>
  );
}

const Styles = StyleSheet.create ({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center"
    },

    topo: {
        marginTop: 20,
        width: '80%',
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10
    },

    voltar: {
        backgroundColor: "white",
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginRight: 25
    },

    titulo: {
        fontFamily: "Regular",
        fontSize: 30
    },

    favoritos: {
        padding: 5,
        width: "100%",
        alignItems: "center"
    }
})