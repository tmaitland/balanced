import { StyleSheet, ScrollView } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button } from 'react-native-paper';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.holdMessages}>
         <Text>Messages</Text>
        </View>
        <View style={styles.holdInput}>
          <TextInput style={styles.input} placeholder="Type your message here" />
          <Button style={styles.button} onPress={() => console.log('Pressed')}>
            <Text>Send</Text></Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button : {
    backgroundColor: 'purple',
    margin: 0,
    height: "100%",
    borderRadius: 0,
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  holdMessages: {
    height: "auto",
  },
  holdInput: {
   flexDirection: 'row',
   margin: 0,
   justifyContent: 'center',
   alignItems: 'center',
  },
  input: {
    margin: 0,
    padding: 0,
    width: "80%",
    borderRadius: 0,
    borderBottomColor: "transparent",
  }
});
