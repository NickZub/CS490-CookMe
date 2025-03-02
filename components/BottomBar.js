import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function BottomBar() {
    return (
        <View style={styles.container}>
            <Text>Bottom Bar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'red'
    },
})