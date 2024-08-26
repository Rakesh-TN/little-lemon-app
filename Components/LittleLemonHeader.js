import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LittleLemonHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.LittleLemonHeaderStyles}>Little Lemon</Text>
    </View>
  )
}

export default LittleLemonHeader

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#EE9972'
    },
    LittleLemonHeaderStyles: {
        padding: 20,
        fontSize:30,
        color: 'black',
        textAlign: 'center',
    }
})