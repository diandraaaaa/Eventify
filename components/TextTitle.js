import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TextTitle = ({ text }) => {
    return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        fontFamily: 'coral',
        marginTop: 20,
    },
});

export default TextTitle;
