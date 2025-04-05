import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, FlatList, Pressable, View } from 'react-native'
import * as styles from '../../styles/globalStyles'

export default function GameScreen() {
    const [player1, setPlayer1] = useState(null)
    const [player2, setPlayer2] = useState(null)
    


    return (
        <View style={styles.container}>
            <Text style={styles.player1}>Player 1</Text>
            <Pressable style={styles.rockButton} onPress={() => setPlayer1('rock')}>
                <Text style={styles.buttonText}>Rock</Text>
            </Pressable>

            <Text style={styles.player2}>Player 2</Text>

        </View>
    )
}