import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import TextTitle from '../components/TextTitle';
import Subtitle from '../components/Subtitle';
import Button from '../components/Button';
const OnboardingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Background Image */}
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/landing_img.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
                {/* Title Over the Image */}
                <View style={styles.titleContainer}>
                    <TextTitle fontSize={30} color={"#000"} text="Eventify" style={styles.title} />
                </View>
            </View>

            {/* Subtitle */}
            <Subtitle
                text="Make your dream wedding a reality with ease. Eventify brings your vision to life, one detail at a time."
                style={styles.subtitle}
            />

            {/* Button */}
            <Button text="Continue" onPress={() => navigation.navigate('SignInScreen')} />
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
        position: 'relative',
        width: 300,
        height: 300,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        position: 'absolute',
        top: '40%', // Adjust to position the title over the image
        alignSelf: 'center',
    },
});

export default OnboardingScreen;