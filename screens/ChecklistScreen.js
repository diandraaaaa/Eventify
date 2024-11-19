import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ChecklistScreen () {
    // Sample guest data - replace with your actual data source
    const guests = [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
        // ... more guests
    ];

    return (
        <View style={styles.container}>
            {/*<Image
                source={require('./../assets/guestlist-icon.png')}
                style={styles.icon}
            />*/}
            <Text style={styles.title}>ChecklistScreen</Text>
            <FlatList
                data={guests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.guestItem}>{item.name}</Text>
                )}
            />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FBEAFF', // Using the same background color as other screens
    },
    icon: {
        width: 50,
        height: 50,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    guestItem: {
        fontSize: 18,
        marginBottom: 10,
    },
};