import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function LittleLemonFooter() {
  return (
    <View style={styles.FootersStyles}>
      <Text style={styles.FooterTextStyle}>All rights reserved by Little Lemon, 2022{' '}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    FootersStyles :{
        backgroundColor: '#EE9972',
        marginBottom: 20,
    },
    FooterTextStyle:{
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        fontStyle: 'italic'
    }
})