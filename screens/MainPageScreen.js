import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from '../components/Navbar';

export default function MainPageScreen() {
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
            {/* Navigation Bar */}
            <Navbar navigation={navigation} />

            {/* Main Content */}
            <View style={styles.content}>
                <Image source={require('../assets/main_img.png')} style={styles.image} />
                <Text style={styles.welcomeText}>Welcome to Eventify</Text>
                <Text style={styles.subText}>Plan your perfect event with ease</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBEAFF',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});