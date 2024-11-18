import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Subtitle = ({ text }) => {
    return <Text style={styles.subtitle}>{text}</Text>;
};

const styles = StyleSheet.create({
    subtitle: {
        fontSize: 16,
        color: '#CA94B7',
        textAlign: 'center',
        marginHorizontal: 20,
        marginVertical: 10,
    },
});

export default Subtitle;
