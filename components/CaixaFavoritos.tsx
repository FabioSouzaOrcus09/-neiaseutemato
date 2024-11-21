import { View, Text, Image, StyleSheet } from "react-native";

interface CaixaFavoritosProps {
    urlImagem: string;
    titulo: string;
    descricao: string;
  }

const CaixaFavoritos = ({ urlImagem, titulo, descricao }) => (
  <View style={Styles.caixa}>
    <Image source={{ uri: urlImagem }} style={Styles.imagem} />
    <View style={Styles.caixaTxt}>
      <Text style={Styles.titulo}>{titulo}</Text>
      <Text style={Styles.descricao}>{descricao}</Text>
    </View>
  </View>
);

const Styles = StyleSheet.create({
  caixa: {
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.35)',
    elevation: 5,
    width: "90%",
    height: 200,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 10 // Adicionando um pequeno espaçamento entre os itens
  },
  imagem: {
    width: "35%",
    height: "80%",
    borderRadius: 10, 
    marginLeft: 20,
    boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.35)',
  },
  caixaTxt: {
    width: "50%", // Alterei para deixar a área de texto maior
    height: "80%",
    flexDirection: "column",
    justifyContent: "center", // Adicionando alinhamento vertical para os textos
    paddingLeft: 10, 
    marginRight: 20// Pequeno espaçamento à esquerda para os textos
  },
  titulo: {
    fontFamily: "Medium", // Verifique se a fonte 'Medium' está carregada corretamente no seu projeto
    fontSize: 18, // Ajustei o tamanho da fonte para o título
    marginBottom: 5, // Espaçamento abaixo do título
  },
  descricao: {
    fontFamily: "Light", // Certifique-se de que a fonte 'Light' também está carregada
    fontSize: 14, // Ajustei o tamanho da fonte para a descrição
  },
});

export default CaixaFavoritos;
