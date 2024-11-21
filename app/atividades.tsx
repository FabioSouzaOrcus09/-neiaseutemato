import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useRouter } from 'expo-router';
import { useFonts } from 'expo-font';
import CaixaAtividade from "@/components/CaixaAtividade";

export default function Atividades() {
    const router = useRouter();

    const [fontsLoaded] = useFonts({
        'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Light': require('../assets/fonts/Poppins-Light.ttf'),
        
    });

    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;  // Ou algum indicador de carregamento
    }

    const atividades = [
        { materia: "DTCC", professor: "Prof° Érica", descricao: "Descrição da atividade 1" },
        { materia: "Matemática", professor: "Prof° João", descricao: "Descrição da atividade 2" },
        { materia: "História", professor: "Prof° Ana", descricao: "Descrição da atividade 3" },
        { materia: "Física", professor: "Prof° Carlos", descricao: "Descrição da atividade 4" },
        { materia: "Química", professor: "Prof° Lucas", descricao: "Descrição da atividade 5" },
      ];

    return(
        <View style = {Styles.container}>
            <View style = {Styles.content}>
                <View style = {Styles.topo}>
                    <TouchableOpacity style = {Styles.voltar} onPress={() => router.back()}>
                        <FontAwesomeIcon icon={faArrowLeft} size={30} />
                    </TouchableOpacity>
                    <Text style = {Styles.titulo}>Atividades</Text>
                </View>
                <ScrollView contentContainerStyle = {Styles.rolarAtv}>
                    {atividades.map((atividade, index) => (
                        <CaixaAtividade
                            key={index}
                            materia={atividade.materia}
                            professor={atividade.professor}
                            descricao={atividade.descricao}
                        />
                    ))} 
                </ScrollView>
            </View>
        </View>
    );
}

const Styles = StyleSheet.create ({
    container: {
        width: "100%",
        height: '100%',
        alignItems: "center",
        justifyContent: "center",

    },

    content: {
        width: 310,
        height: "95%",
        flexDirection: "column",
        alignItems: "center",
    },

    topo: {
        width: '100%',
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

    rolarAtv:{
        padding: 5,
        width: "80%",
        alignItems: "center"
    },
})