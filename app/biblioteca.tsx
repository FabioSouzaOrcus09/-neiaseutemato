import { Text, View, TextInput, StyleSheet, Pressable, Image, FlatList, ScrollView} from "react-native";
import { faArrowLeft, faIcons, faHeart, faMagnifyingGlass, faBookmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';
import { useRouter, useGlobalSearchParams } from 'expo-router';

export default function Biblioteca() {

    const filmes = [
        { 
            id: '1', 
            titulo: 'Mestres do tempo', 
            autor: 'H.G. Wells', 
            descricao: 'Uma fascinante jornada pelo tempo e suas possibilidades.', 
            imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg' 
        },
        { 
            id: '2', 
            titulo: 'Sessão da Meia-Noite', 
            autor: 'Edgar Allan Poe', 
            descricao: 'Contos sombrios que exploram os medos mais profundos da humanidade.', 
            imagem: 'https://ocapista.com.br/imgs/capas/livro_de_horror_capa_livro_2.jpg' 
        },
        { 
            id: '3', 
            titulo: 'Filhas da lua', 
            autor: 'Sarah J. Maas', 
            descricao: 'Uma história épica sobre magia, amor e sacrifício.', 
            imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg' 
        },
        // Adicione mais itens
    ];

    const [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
    
    });

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle = {Styles.container}>
        <View style = {Styles.topo}>
            <Pressable style = {Styles.voltar} onPress={() => router.back()}>
                <FontAwesomeIcon icon={faArrowLeft} size={30} />
            </Pressable>
            <Text style = {Styles.titulo}>OharaLib</Text>
        </View>
        <View style = {Styles.itens}>
            <Pressable style = {Styles.botoes}>
                <FontAwesomeIcon icon={faBookmark} size={38} />
                <Text style = {Styles.txtBotao}>Reservas</Text>
            </Pressable>
            <Pressable style = {Styles.botoes} onPress={() => router.push("/favoritos")}>
                <FontAwesomeIcon icon={faHeart} size={38}/>
                <Text style = {Styles.txtBotao}>Favoritos</Text>
            </Pressable>
            <Pressable style = {Styles.botoes}>
                <FontAwesomeIcon icon={faIcons} size={38} />
                <Text style = {Styles.txtBotao}>Categorias</Text>
            </Pressable>
            <Pressable style = {Styles.botoes} onPress={() => router.push("/procurar")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={38} />
                <Text style = {Styles.txtBotao}>Pesquisar</Text>
            </Pressable>
        </View>
        <View style = {Styles.areaScroll}>
            <Text style = {Styles.txtLivros}>Destaques</Text>
            <FlatList
                data={filmes}
                renderItem={({ item }) => (
                    <Pressable 
                        style={Styles.item} 
                        onPress={() => router.push({
                        pathname: '/livro',
                        params: {
                            titulo: item.titulo,
                            imagem: item.imagem,
                            autor: item.autor,
                            descricao: item.descricao
                            }
                        })}
>
                        <Image source={{ uri: item.imagem }} style={Styles.imagem} />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                horizontal // Isso faz o scroll ser horizontal
                showsHorizontalScrollIndicator={false} // Remove o indicador de rolagem
            />
        </View>
        <View style = {Styles.areaScroll}>
            <Text style = {Styles.txtLivros}>Dramas</Text>
            <FlatList
                data={filmes}
                renderItem={({ item }) => (
                    <Pressable 
                        style={Styles.item} 
                        onPress={() => router.push({
                        pathname: '/livro',
                        params: {
                            titulo: item.titulo,
                            imagem: item.imagem,
                            autor: item.autor,
                            descricao: item.descricao
                            }
                        })}
>
                        <Image source={{ uri: item.imagem }} style={Styles.imagem} />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                horizontal // Isso faz o scroll ser horizontal
                showsHorizontalScrollIndicator={false} // Remove o indicador de rolagem
            />
        </View>
        <View style = {Styles.areaScroll}>
            <Text style = {Styles.txtLivros}>Terror</Text>
            <FlatList
                data={filmes}
                renderItem={({ item }) => (
                    <Pressable 
                        style={Styles.item} 
                        onPress={() => router.push({
                        pathname: '/livro',
                        params: {
                            titulo: item.titulo,
                            imagem: item.imagem,
                            autor: item.autor,
                            descricao: item.descricao
                            }
                        })}
>
                        <Image source={{ uri: item.imagem }} style={Styles.imagem} />
                    </Pressable>
                )}
                keyExtractor={(item) => item.id}
                horizontal // Isso faz o scroll ser horizontal
                showsHorizontalScrollIndicator={false} // Remove o indicador de rolagem
            />
        </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create ({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center"
    },

    topo: {
        marginTop: 20,
        width: '80%',
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
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginRight: 25
    },

    titulo: {
        fontFamily: "Regular",
        fontSize: 30
    },

    itens: {
        flexWrap: "wrap-reverse",
        width: "80%",
        alignContent: "space-between",
        justifyContent: "space-between",
        height: 300,
        marginBottom: 45
    },

    botoes: {
        width: "45%",
        height: "45%",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
        elevation: 5,
        borderRadius: 15
    },

    txtBotao: {
        fontFamily: "Regular",
        fontSize: 15,
        marginTop: 15
    },

    areaScroll: {
        height: 300,
        width: "100%",
        paddingLeft: "10%"
    },

    txtLivros: {
        fontFamily: "Medium",
        fontSize: 28,
        marginBottom: 5
    },

    item: {
        alignItems: "center",
        marginRight: 20,
    },

    imagem: {
        width: 135,
        height: "80%",
        borderRadius: 5,
        boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.35)',
        elevation: 4
    }


})