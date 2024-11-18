import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Updated import
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

// Import screens
import OnboardingScreen from './screens/OnboardingScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainPageScreen from './screens/MainPageScreen';

const Stack = createNativeStackNavigator(); // Using native stack navigator

export default function App() {
    // Load custom fonts
    const [fontsLoaded] = useFonts({
        Poppins: require('@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
        Lora: require('@expo-google-fonts/lora/Lora_400Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false, // Hide default headers to allow custom headers or no headers
                }}
            >
                {/* Define the app's screens */}
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="MainPageScreen" component={MainPageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}