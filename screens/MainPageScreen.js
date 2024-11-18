import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';

export default function MainPageScreen({ navigation }) {
    return (
        <View >
            <Navbar title="Welcome"/>
            <View>
                <Image style={styles.container} source={require('../assets/main_img.png')} style={styles.image} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FBEAFF', alignItems: "center", justifyContent: "center" },
    image: { width: '100%', height: 200, marginVertical: 20 },
});
