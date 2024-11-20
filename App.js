import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './screens/OnboardingScreen';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainPageScreen from './screens/MainPageScreen';
import GuestsListScreen from './screens/GuestsListScreen';
// import ChecklistScreen from './screens/ChecklistScreen';
// import BudgetScreen from './screens/BudgetScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="MainPageScreen" component={MainPageScreen} />
                <Stack.Screen name="GuestsListScreen" component={GuestsListScreen} />
                {/*<Stack.Screen name="ChecklistScreen" component={ChecklistScreen} />*/}
                {/*<Stack.Screen name="BudgetScreen" component={BudgetScreen} />*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}