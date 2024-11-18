import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextTitle = ({ text, fontSize = 12, color = '#fff' }) => {
    return <Text style={[styles.title, { fontSize, color }]}>{text}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontFamily: 'coral',
        marginVertical: 10,
    },
});

export default TextTitle;