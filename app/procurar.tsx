import { Text, View, TextInput, StyleSheet, Pressable, Image, FlatList} from "react-native";
import { faArrowLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';
import { useRouter } from "expo-router";
import Livro from "./livro";
import { useState } from "react";

const livros = [
    { 
        id: '1', 
        titulo: 'Livro 1', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 1',
        descricao: 'Este é um livro de fantasia que conta a história de...'
    },
    { 
        id: '2', 
        titulo: 'Livro 2', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 2',
        descricao: 'Em uma terra distante, um herói enfrenta desafios épicos...'
    },
    { 
        id: '3', 
        titulo: 'Livro 3', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 3',
        descricao: 'Uma jornada emocionante que mistura magia e aventura...'
    },
    { 
        id: '4', 
        titulo: 'Livro 4', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 4',
        descricao: 'Descubra o segredo por trás de um mundo cheio de mistérios...'
    },
    { 
        id: '5', 
        titulo: 'Livro 5', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 5',
        descricao: 'Uma história de amizade e superação no coração de um império...'
    },
    { 
        id: '6', 
        titulo: 'Livro 6', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 6',
        descricao: 'Uma trama envolvente que explora os limites da lealdade...'
    },
    { 
        id: '7', 
        titulo: 'Livro 7', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 7',
        descricao: 'Misteriosos eventos acontecem em um mundo de magia antiga...'
    },
    { 
        id: '8', 
        titulo: 'Livro 8', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia_romance.jpg',
        autor: 'Autor 8',
        descricao: 'A luta pelo poder começa enquanto destinos se cruzam...'
    },
    { 
        id: '9', 
        titulo: 'Livro 9', 
        imagem: 'https://ocapista.com.br/imgs/capas/capa_livro_fantasia.jpg',
        autor: 'Autor 9',
        descricao: 'Em um mundo onde nada é o que parece, a busca por respostas nunca termina...'
    }
];


export default function Procurar() {

    const [pesquisarTxt, mudarTxt] = useState("");

    const filtroLivros = livros.filter((item) =>
        item.titulo.toLowerCase().includes(pesquisarTxt.toLowerCase())
    );

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

    return(
        <View style = {Styles.container}>
            <View style={Styles.topo}>
                <Pressable style={Styles.voltar} onPress={() => router.back()}>
                    <FontAwesomeIcon icon={faArrowLeft} size={30} />
                </Pressable>
                <Text style={Styles.titulo}>Pesquisar</Text>
            </View>
            <View style={Styles.pesquisar}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size={20} />
                <TextInput placeholder="Buscar por título"  style={Styles.txtPesquisa} value={pesquisarTxt} onChangeText={(text) => mudarTxt(text)}/>
            </View>
            <Text style={Styles.txtResultado}>{pesquisarTxt ? "Resultados:" : "Novidades"}</Text>
            <FlatList
                data={filtroLivros}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Pressable style={Styles.caixa} onPress={() => router.push({
                        pathname: '/livro',
                        params: {
                            titulo: item.titulo,
                            imagem: item.imagem,
                            autor: item.autor,
                            descricao: item.descricao
                        }
                    })}>
                        <Image source={{uri: item.imagem}} style={Styles.livro} resizeMode="cover"/>
                    </Pressable>
                )}
                numColumns={2}
                contentContainerStyle = {Styles.lista}
                style = {Styles.listaExterno}

            />
        </View>
    );

}

const Styles = StyleSheet.create ({
    container:{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
    },

    topo: {
        marginTop: 20,
        width: "80%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
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

    pesquisar:{
        width: "80%",
        height: 55,
        flexDirection: "row",
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10,
        marginBottom: 25
    },

    txtPesquisa: {
        width: "80%",
        marginLeft: 10,
        fontFamily: "Light",
        fontSize:16
    },

    txtResultado: {
        width: "78%",
        fontFamily: "Medium",
        fontSize:24,
        marginBottom: 10
    },

    lista: {
        width: '100%',
        alignItems:"center",
        justifyContent: "space-between"
    },

    listaExterno: {
        width: "90%",
        flexGrow: 1
    },

    caixa:{
        width: 120,
        height: 190,
        margin: 10, // Espaçamento entre os itens
        alignItems: "center",
    },

    livro: {
        width: "100%",
        height: "100%",
        borderRadius: 8,
    }



})