import { Text, View, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faChartColumn, faBookOpen, faClipboard, faBookAtlas } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import { useRouter } from 'expo-router';
import axios from 'axios';
import React from 'react'; // Importando o axios para fazer requisições HTTP

dayjs.locale('pt-br');

// Definindo a estrutura de dados do aluno
interface Aluno {
  nome: string;
  foto: string;
  curso: string;
  semestre: string;
}

export default function Principal() {
  const router = useRouter();

  // Estados para armazenar os dados do aluno
  const [aluno, setAluno] = React.useState<Aluno | null>(null); // Definindo o tipo de `aluno`
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchAluno = async () => {
      try {
        // Alterando a URL para 'http://localhost:3000/alunos'
        const response = await axios.get("http://localhost:3000/alunos");
        const alunoData = response.data[0]; // Pegando o primeiro aluno
        setAluno(alunoData);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao obter dados do aluno:", error);
        setLoading(false);
      }
    };

    fetchAluno(); // Chama a função para obter os dados
  }, []);

  const dataDia = dayjs().format('DD MMM');

  const [fontsLoaded] = useFonts({
    'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Light': require('../assets/fonts/Poppins-Light.ttf'),
  });

  if (!fontsLoaded || loading) {
    return <Text>Carregando...</Text>;
  }

  if (!aluno) {
    return <Text>Aluno não encontrado</Text>;
  }

  return (
    <View style={Styles.container}>
      <StatusBar translucent={true} barStyle={"light-content"} />
      <View style={Styles.content}>
        <View style={Styles.topo}>
          <View style={Styles.titulo}>
            <Text style={Styles.diaMes}>{dataDia}</Text>
            <Text style={Styles.txt}>Olá, {aluno.nome}!</Text>
          </View>
          <FontAwesomeIcon icon={faBell} size={36} />
        </View>

        <View style={Styles.caixa}>
          <Image style={Styles.imgAluno} source={{ uri: aluno.foto || 'URL_DEFAULT' }} />
          <Text style={Styles.labels}>Curso:</Text>
          <Text style={Styles.dados}>{aluno.curso}</Text>
          <Text style={Styles.labels}>Semestre:</Text>
          <Text style={Styles.dados}>{aluno.semestre} DS</Text>
        </View>

        <View style={Styles.caixaBotoes}>
          <TouchableOpacity style={Styles.botoes}>
            <FontAwesomeIcon icon={faChartColumn} size={40} />
            <Text style={Styles.botoesTxt}>Gráfico do Aluno</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.botoes} onPress={() => router.push('/declaracoes')}>
            <FontAwesomeIcon icon={faClipboard} size={40} />
            <Text style={Styles.botoesTxt}>Declarações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.botoes} onPress={() => router.push('/atividades')}>
            <FontAwesomeIcon icon={faBookOpen} size={40} />
            <Text style={Styles.botoesTxt}>Atividades</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.botoes} onPress={() => router.push('/biblioteca')}>
            <FontAwesomeIcon icon={faBookAtlas} size={40} />
            <Text style={Styles.botoesTxt}>Biblioteca</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: 293,
    height: 727,
  },
  topo: {
    marginTop: 10,
    width: 293,
    height: 49,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 40,
  },
  titulo: {
    width: 148,
    height: "100%",
  },
  diaMes: {
    fontFamily: "Light",
    fontSize: 16,
  },
  txt: {
    fontFamily: "Regular",
    fontSize: 26,
  },
  caixa: {
    width: 293,
    height: 300,
    borderRadius: 20,
    backgroundColor: "white",
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  imgAluno: {
    backgroundColor: "black",
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 15,
  },
  labels: {
    width: 243,
    fontFamily: "Regular",
    fontSize: 16,
  },
  dados: {
    width: 243,
    fontFamily: "Light",
    fontSize: 15,
    marginBottom: 15,
  },
  caixaBotoes: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
    width: 293,
    height: 290,
  },
  botoes: {
    width: 135,
    height: 135,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },
  botoesTxt: {
    width: 95,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "Light",
    marginTop: 10,
  },
});
