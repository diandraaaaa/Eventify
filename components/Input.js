import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function Input({ placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            placeholderTextColor="#9E9E9E"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: '80%',
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        fontSize: 14,
        fontFamily: 'Poppins',
    },
});
