import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function GuestlistScreen() {
    const navigation = useNavigation(); // Access navigation object

    const [guests, setGuests] = useState([
        { id: '1', name: 'Diandra', status: 'attending' },
        { id: '2', name: 'Patricia', status: 'attending' },
        { id: '3', name: 'Michael', status: 'pending' },
    ]);

    const [newGuestName, setNewGuestName] = useState('');

    // Calculate guest counts
    const totalGuests = guests.length;
    const attendingGuests = guests.filter((guest) => guest.status === 'attending').length;
    const pendingGuests = guests.filter((guest) => guest.status === 'pending').length;

    // Add new guest
    const handleAddGuest = () => {
        if (newGuestName.trim() === '') {
            Alert.alert('Error', 'Guest name cannot be empty.');
            return;
        }

        const newGuest = {
            id: (guests.length + 1).toString(),
            name: newGuestName,
            status: 'pending', // Default status
        };

        setGuests([...guests, newGuest]);
        setNewGuestName(''); // Clear input
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('MainPageScreen')}>
                    <Image
                        source={require('../assets/homepage-icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Guests</Text>
                <Image
                    source={require('../assets/download-icon.png')}
                    style={styles.icon}
                />
            </View>

            {/* Summary Section */}
            <View style={styles.summary}>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{totalGuests}</Text>
                    <Text style={styles.summaryLabel}>Total</Text>
                </View>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{attendingGuests}</Text>
                    <Text style={styles.summaryLabel}>Attending</Text>
                </View>
                <View style={styles.summaryItem}>
                    <Text style={styles.summaryValue}>{pendingGuests}</Text>
                    <Text style={styles.summaryLabel}>Pending</Text>
                </View>
            </View>

            {/* Guest List */}
            <Text style={styles.listTitle}>{totalGuests} Guests</Text>
            <FlatList
                data={guests}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.guestItem}>
                        <Text style={styles.guestInitial}>
                            {item.name.charAt(0)}
                        </Text>
                        <View>
                            <Text style={styles.guestName}>{item.name}</Text>
                            <Text
                                style={[
                                    styles.guestStatus,
                                    item.status === 'attending'
                                        ? styles.statusAttending
                                        : styles.statusPending,
                                ]}
                            >
                                {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            </Text>
                        </View>
                    </View>
                )}
            />

            {/* Add Guest Section */}
            <View style={styles.addGuestContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter guest name"
                    value={newGuestName}
                    onChangeText={setNewGuestName}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddGuest}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBEAFF',
    },
    header: {
        backgroundColor: '#F2A5F3',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
    },
    icon: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        fontSize: 24,
        color: '#fff',
        fontFamily: 'Cursive',
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryValue: {
        fontSize: 20,
        color: '#D789D7',
    },
    summaryLabel: {
        fontSize: 14,
        color: '#D789D7',
    },
    listTitle: {
        fontSize: 16,
        color: '#D789D7',
        marginLeft: 15,
        marginBottom: 10,
    },
    guestItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FBEAFF',
        padding: 10,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#F2A5F3',
    },
    guestInitial: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#D789D7',
        width: 40,
        height: 40,
        borderRadius: 20,
        textAlign: 'center',
        lineHeight: 40,
        marginRight: 10,
    },
    guestName: {
        fontSize: 16,
        color: '#D789D7',
    },
    guestStatus: {
        fontSize: 14,
        marginTop: 5,
    },
    statusAttending: {
        color: '#4CAF50', // Green for attending
    },
    statusPending: {
        color: '#FF9800', // Orange for pending
    },
    addGuestContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginVertical: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#F2A5F3',
        borderRadius: 8,
        padding: 10,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#F2A5F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});
