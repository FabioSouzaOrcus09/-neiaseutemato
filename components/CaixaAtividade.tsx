import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const CaixaAtividade = ({ materia, professor, descricao }) => (
  <View style={Styles.caixa}>
    <View style={Styles.txt}>
      <Text style={Styles.materia}>{materia}</Text>
      <Text style={Styles.prof}>{professor}</Text>
      <Text style={Styles.descricao}>{descricao}</Text>
    </View>
    <TouchableOpacity style={Styles.enviarAtv}>
      <FontAwesomeIcon icon={faPaperPlane} size={25} color={"white"} />
    </TouchableOpacity>
  </View>
);

const Styles = StyleSheet.create({
  caixa: {
    width: 300,
    height: 130,
    backgroundColor: "white",
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.35)',
    elevation: 5,
    borderRadius: 15,
    marginBottom: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  txt: {
    width: 149,
    height: 88,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  materia: {
    fontFamily: "Regular",
    fontSize: 17,
  },
  prof: {
    fontFamily: "Regular",
    fontSize: 14,
  },
  descricao: {
    fontFamily: "Light",
    fontSize: 14,
  },
  enviarAtv: {
    width: 54,
    height: 54,
    backgroundColor: "black",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CaixaAtividade;
