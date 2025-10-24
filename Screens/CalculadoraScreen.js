import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function CalculadoraScreen() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');

    const Somar = () => {
        const numero1 = num1;
        const numero2 = num2;
        const soma = +numero1 + +numero2;
        setResultado(soma);
    };

    const Subtrair = () => {
        const numero1 = num1;
        const numero2 = num2;
        const subtrair = numero1 - numero2;
        setResultado(subtrair);
    };

    const Multiplicar = () => {
        const numero1 = num1;
        const numero2 = num2;
        const multiplicar = numero1 * numero2;
        setResultado(multiplicar);
    };

    const Dividir = () => {
        const numero1 = num1;
        const numero2 = num2;
        const dividir = numero1 / numero2;
        setResultado(dividir);
    };

    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Calculadora</Text>

            <TextInput
                style={estilos.input}
                placeholder="Digite o primeiro número"
                value={num1}
                onChangeText={setNum1}
            />

            <TextInput
                style={estilos.input}
                placeholder="Digite o segundo número"
                value={num2}
                onChangeText={setNum2}
            />

            <View style={estilos.botao}>
                <Button title="Somar" onPress={Somar} />
            </View>

            <View style={estilos.botao}>
                <Button title="Subtrair" onPress={Subtrair} />
            </View>

            <View style={estilos.botao}>
                <Button title="Multiplicar" onPress={Multiplicar} />
            </View>

            <View style={estilos.botao}>
                <Button title="Dividir" onPress={Dividir} />
            </View>

            <Text style={estilos.texto}>Resultado é {resultado}</Text>
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
        marginVertical: 10,
    },
    texto: {
        fontFamily: 'Arial',
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '80%',
        paddingHorizontal: 10,
    },
});
