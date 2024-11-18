import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Navbar({ title }) {
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#C77DFF',
        padding: 15,
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        color: '#FFF',
        fontSize: 20,
        fontFamily: 'Lora', // Cursive font for elegance
    },
});
