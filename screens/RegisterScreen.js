import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Input from '../components/Input';
import Button from '../components/Button';
import TextTitle from '../components/TextTitle';

export default function RegisterScreen({ navigation }) {
    const [accountType, setAccountType] = useState('Client');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [serviceType, setServiceType] = useState('');

    return (
        <View style={styles.container}>
            <TextTitle fontSize={30} color={"#000"} text="Register" style={styles.title} />

            {/* Account Type Picker */}
            <Picker
                selectedValue={accountType}
                onValueChange={(itemValue) => setAccountType(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Client" value="Client" />
                <Picker.Item label="Provider" value="Provider" />
            </Picker>

            {/* Input fields */}
            <Input placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
            <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
            <Input placeholder="Username" value={username} onChangeText={setUsername} style={styles.input} />
            <Input placeholder="Phone" value={phone} onChangeText={setPhone} style={styles.input} />

            {/* Additional fields for Providers */}
            {accountType === 'Provider' && (
                <>
                    <Input placeholder="Company Name" value={companyName} onChangeText={setCompanyName} style={styles.input} />
                    <Input placeholder="Service Type" value={serviceType} onChangeText={setServiceType} style={styles.input} />
                </>
            )}

            {/* Register button */}
            <Button text="Register" onPress={() => navigation.navigate('MainPageScreen')} style={styles.button} />

            {/* Link to Sign In screen */}
            <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Sign In</Text></Text>
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
        paddingHorizontal: 20,  // Ensure elements don't touch the edges
    },
    title: {
        marginBottom: 40,  // Space between title and inputs
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',  // Ensure inputs take up full width
        marginBottom: 15,  // Space between inputs
        paddingHorizontal: 10,  // Optional, to add padding inside the input fields
    },
    button: {
        width: '100%',  // Make button as wide as inputs
        marginBottom: 20,  // Space between button and register text
    },
    picker: {
        width: '100%',
        backgroundColor: '#FFF',
        marginBottom: 15,
        borderRadius: 25
    },
    signInText: {
        marginTop: 20,
        fontSize: 16,
        color: '#000',  // Default color for the text
    },
    signInLink: {
        color: '#D979D9', // Pink color for the "Sign In" part
    },
});
