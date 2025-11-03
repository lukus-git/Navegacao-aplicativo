import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useState } from 'react';

export default function IMCScreen() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');

   const calcula = () => {
  const pesoPessoa = parseFloat(peso);
  const alturaPessoa = parseFloat(altura);
  const imc = pesoPessoa / (alturaPessoa * alturaPessoa);
  let mensagem = '';

  if (imc < 20.7) {
    mensagem = 'Abaixo do peso';
  } else if (imc < 26.4) {
    mensagem = 'Peso ideal';
  } else if (imc < 27.8) {
    mensagem = 'Levemente acima do peso';
  } else if (imc < 31.1) {
    mensagem = 'Obesidade';
  } else {
    mensagem = 'Você está imensa';
  }

  setResultado(`Seu IMC é ${imc} - ${mensagem}`);
};




    return (
        <View style={estilos.container}>
            <Text style={estilos.texto}>Calculadora de IMC.</Text>

            <TextInput
                style={estilos.input}
                placeholder="Digite seu peso"
                value={peso}
                onChangeText={setPeso}
            />

            <TextInput
                style={estilos.input}
                placeholder="Digite sua altura"
                value={altura}
                onChangeText={setAltura}
            />

            <View style={estilos.botao}>
                <Button title="calcular IMC" onPress={calcula} />
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
