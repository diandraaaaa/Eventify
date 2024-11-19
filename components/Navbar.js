import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import TextTitle from './TextTitle';

const NavBar = () => {
    const navigation = useNavigation(); // Access the navigation object

    return (
        <View style={styles.container}>
            {/* Menu Icon */}
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                    source={require('../assets/menu-icon.png')} // Replace with your actual menu icon path
                    style={styles.iconMenu}
                />
            </TouchableOpacity>

            {/* Title */}
            <TextTitle fontSize={30} text="Welcome" />

            {/* Navigation Icons */}
            <View style={styles.navContainer}>
                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('GuestsListScreen')}
                >
                    <Image
                        source={require('../assets/guestlist-icon.png')} // Replace with actual path
                        style={styles.icon}
                    />
                    <TextTitle text="Guest List" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('ChecklistScreen')} // Replace with the actual screen name
                >
                    <Image
                        source={require('../assets/checklist-icon.png')} // Replace with actual path
                        style={styles.icon}
                    />
                    <TextTitle text="Checklist" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('BudgetScreen')} // Replace with the actual screen name
                >
                    <Image
                        source={require('../assets/budget-icon.png')} // Replace with actual path
                        style={styles.icon}
                    />
                    <TextTitle text="Budget" />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.navItem}
                    onPress={() => navigation.navigate('SuppliersScreen')} // Replace with the actual screen name
                >
                    <Image
                        source={require('../assets/suppliers-icon.png')} // Replace with actual path
                        style={styles.icon}
                    />
                    <TextTitle text="Suppliers" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#D3A1F2', // light pink gradient color
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
        position: 'absolute',
        left: 10,
        top: 55,
    },
    icon: {
        width: 40,
        height: 40,
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
});

export default NavBar;