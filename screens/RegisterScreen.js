import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';  // Update this import
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
            <TextTitle>Register</TextTitle>
            <Picker
                selectedValue={accountType}
                onValueChange={(itemValue) => setAccountType(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="Client" value="Client" />
                <Picker.Item label="Provider" value="Provider" />
            </Picker>
            <Input placeholder="Email" value={email} onChangeText={setEmail} />
            <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Input placeholder="Username" value={username} onChangeText={setUsername} />
            <Input placeholder="Phone" value={phone} onChangeText={setPhone} />
            {accountType === 'Provider' && (
                <>
                    <Input placeholder="Company Name" value={companyName} onChangeText={setCompanyName} />
                    <Input placeholder="Service Type" value={serviceType} onChangeText={setServiceType} />
                </>
            )}
            <Button title="Register" onPress={() => navigation.navigate('MainPageScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FBEAFF' },
    picker: { width: '80%', backgroundColor: '#FFF', marginBottom: 15, borderRadius: 25 },
});