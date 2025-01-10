import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import TextTitle from '../components/TextTitle';
import { login } from '../api/auth'; // Import your login function

export default function SignInScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // To handle loading state

    const handleSignIn = async () => {
        if (!username || !password) {
            Alert.alert('Validation Error', 'Please fill in all fields.');
            return;
        }

        setLoading(true);
        try {
            // Call the API
            const data = await login(username, password);
            Alert.alert('Success', 'You are logged in!');
            // Store the token or navigate to another screen
            navigation.navigate('MainPageScreen'); // Example: Go to MainPageScreen
        } catch (error) {
            Alert.alert('Login Failed', error || 'Invalid credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            {/* Sign In Title */}
            <TextTitle fontSize={30} color={"#000"} text="Sign In" style={styles.title} />

            {/* Username and Password Inputs */}
            <Input placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
            <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />

            {/* Sign In Button */}
            <Button
                text={loading ? 'Signing In...' : 'Sign In'}
                onPress={handleSignIn}
                style={styles.button}
                disabled={loading} // Disable button during login
            />

            {/* Don’t have an account? Register text */}
            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.registerText}>
                    Don’t have an account? <Text style={styles.registerLink}>Register</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FBEAFF',
        paddingHorizontal: 20, // Ensure elements don't touch the edges
    },
    title: {
        marginBottom: 40, // Space between title and inputs
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        width: '100%', // Ensure inputs take up full width
        marginBottom: 15, // Space between inputs
        paddingHorizontal: 10, // Optional, to add padding inside the input fields
    },
    button: {
        width: '100%', // Make button as wide as inputs
        marginBottom: 20, // Space between button and register text
    },
    registerText: {
        marginTop: 20,
        fontSize: 16,
        color: '#000', // Default text color
    },
    registerLink: {
        color: '#D979D9', // Pink color for the "Register" part
    },
});
