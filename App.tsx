import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import aleatorio from './funcao/funcao';

const App = () => {
    const [min, setMin] = useState<string>('');
    const [max, setMax] = useState<string>('');
    const [numeroAleatorio, setNumeroAleatorio] = useState<number | null>(null);

    const mudarMin = (value: string) => {
        setMin(value);
    };

    const mudarMax = (value: string) => {
        setMax(value);
    };

    const gerarNumeroAleatorio = () => {
        if (min !== '' && max !== '') {
            const numero = aleatorio(parseInt(min), parseInt(max));
            setNumeroAleatorio(numero);
        } else {
            // Aqui você pode adicionar lógica para lidar com campos vazios
            console.log('Preencha ambos os campos para gerar um número aleatório.');
        }
    };

    return (
        <View style={styles.container}>
            <Text>Digite o menor número:</Text>
            <TextInput
                style={styles.barra}
                onChangeText={mudarMin}
                value={min}
                keyboardType="numeric"
            />

            <Text>Digite o maior número:</Text>
            <TextInput
                style={styles.barra}
                onChangeText={mudarMax}
                value={max}
                keyboardType="numeric"
            />

            <Button title="Gerar Número Aleatório" onPress={gerarNumeroAleatorio} />

            {numeroAleatorio !== null && (
                <Text style={styles.letra}>Número aleatório: {numeroAleatorio}</Text>
            )}
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    barra: {
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
    letra: {
        fontSize: 30,
        color: '#A9A9A9',
        marginTop: 20,
    },
});
