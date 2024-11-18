import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

export default function MainPageScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Navbar title="Welcome" />
            <Image source={require('../assets/main_img.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FBEAFF', alignItems: "center", justifyContent: "center" },
    image: { width: '100%', height: 200, marginVertical: 20 },
});
