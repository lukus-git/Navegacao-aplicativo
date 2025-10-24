import { View, Text, StyleSheet, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Calculadora de IMC.</Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    botao: {
        width: '60%',
        marginVertical: 20,
    },
    texto: {
        fontFamily: 'Arial',
        fontSize: 18,
        marginBottom: 10,
    },
});
