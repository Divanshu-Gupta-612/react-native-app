import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function Chat(props) {
    console.log(props);
    const [chats, updateChats] = useState([]);

    return ( 
        <View style={styles.container}>
            <View style={styles.finalBox}>
                <Button title='back' onPress={()=> props.fun(false)}/>
                <Text>Room Name</Text>
            </View>
            <View style={styles.chatBox}>
                <Text>
                    Chats
                </Text>
            </View>
            <View style={styles.finalBox}>
                <TextInput style={styles.inputStyle} placeholder='type message' />
                <Button title='send'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
    },
    chatBox: {
        flexGrow: 1,
    },
    finalBox: {
        flexDirection: 'row',
    },
    inputStyle: {
        flexGrow: 1,
        borderWidth: 2,
        borderColor: 'black',
        height: 40,
        paddingHorizontal: 4,
    },
})
