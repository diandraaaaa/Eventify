import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import TextTitle from '../components/TextTitle';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            {/* Background Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/landing_img.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            {/* Title */}
            <TextTitle text="Eventify" />

            {/* Subtitle */}
            <Subtitle text="Make your dream wedding a reality with ease. Eventify brings your vision to life, one detail at a time." />

            {/* Button */}
            <Button text="Continue" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EAF3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        position: 'absolute',
        top: 50,
        right: 20,
        opacity: 0.2,
    },
    image: {
        width: 300,
        height: 300,
    },
});

export default OnboardingScreen;
