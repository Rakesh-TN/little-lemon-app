import { StyleSheet, Text, ScrollView, TextInput } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
    return (
        <ScrollView indicatorStyle={"white"} style={{ flex: 1 }}>
            <Text style={styles.HeadersStyle}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!</Text>
        <TextInput />
        </ScrollView>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    HeadersStyle: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText:{
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    }
})