import { View, Text, StyleSheet, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Tela inicial.</Text>
            <View style={estilos.botao}>
                <Button
                    title='Calulcadora IMC'
                    onPress={() => navigation.navigate('IMC')}
                />
            </View>
             
            <View style={estilos.botao}>
                <Button
                title='Calculadora Simples'
                onPress={() => navigation.navigate('Calculadora')}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d9992ff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#000',
    },
    botao: {
        width: '60%',
        marginVertical: 10,
        borderWidth: 2,
        borderColor: '#000',
        
    },
    texto: {
        fontFamily: 'Arial',
        fontSize: 18,
    },
});
