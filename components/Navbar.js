import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';

const Navbar = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                    source={require('../assets/menu-icon.png')}
                    style={styles.iconMenu}
                />
            </TouchableOpacity>

            <View style={styles.navContainer}>
                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('MainPageScreen')}>
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('GuestsListScreen')}>
                    <Text style={styles.navText}>Guest List</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('ChecklistScreen')}>
                    <Text style={styles.navText}>Checklist</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('BudgetScreen')}>
                    <Text style={styles.navText}>Budget</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D3A1F2',
        padding: 20,
        paddingTop: 60,
    },
    iconContainer: {
        position: 'absolute',
        left: 20,
        top: 20,
    },
    iconMenu: {
        width: 30,
        height: 30,
        tintColor: '#FFF',
    },
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Navbar;