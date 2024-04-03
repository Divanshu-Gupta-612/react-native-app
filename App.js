import { StatusBar } from 'expo-status-bar';
import { Button, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Chat from './components/Chat/chat';

export default function App() {
  const [isVisible, setVisibility] = useState(false);
  const [rooms, updateRooms] = useState([]);
  const [room, updateRoom] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style='auto' backgroundColor="transparent" />
      <Button title='press' onPress={()=> setVisibility(true)} />
      <Modal visible={isVisible} animationType='slide' presentationStyle='pageSheet'>
        <Chat fun={setVisibility} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: 40,
  },
});
