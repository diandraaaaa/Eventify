import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import TextTitle from '../components/TextTitle';

export default function SignInScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextTitle>Sign In</TextTitle>
            <Input placeholder="Username" value={username} onChangeText={setUsername} />
            <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Sign In" onPress={() => navigation.navigate('MainPageScreen')} />
            <Button
                title="Register"
                onPress={() => navigation.navigate('RegisterScreen')}
                style={styles.secondaryButton}
                textStyle={styles.secondaryButtonText}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FBEAFF' },
    secondaryButton: { backgroundColor: 'transparent' },
    secondaryButtonText: { color: '#6D28D9' },
});
