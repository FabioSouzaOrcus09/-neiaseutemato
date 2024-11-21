import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useFonts } from 'expo-font';
import { useRouter } from 'expo-router';

export default function Notas() {
    const [fontsLoaded] = useFonts({
        'Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
        'Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Light': require('../assets/fonts/Poppins-Light.ttf'),
        
    });
    
    if (!fontsLoaded) {
        return <Text>Carregando fontes...</Text>;  // Ou algum indicador de carregamento
    }

    
}