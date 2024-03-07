import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from 'react-native-paper';
import {useState, useEffect} from 'react';
import { Text, View } from '@/components/Themed';
import { TextInput } from 'react-native-paper';

/**
 * Renders a modal screen for selecting a period start date.
 */
export default function ModalScreen() {
  const [dateOfPeriod, setDateOfPeriod] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };
  const onChange = ({type}, selectedDate) => {
    if(type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatePicker();
    }
  }
  const confirmDate = () => {
    setDateOfPeriod(date.toDateString());
    toggleDatePicker();
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator>
        <Text style={styles.title}>Select Period Start Date</Text>
        {showPicker && (
          <>
            <DateTimePicker
              value={date}
              mode="date"
              is24Hour={true}
              display="spinner"
              onChange={onChange}
              style={styles.datePicker}
              minimumDate={new Date(2021, 0, 1)}
              maximumDate={new Date()}
            />
          <View style={styles.containBtn}> 
            <TouchableOpacity>
              <Button
              style={styles.submitBtn}
              onPress={confirmDate}
              >Submit</Button>
            </TouchableOpacity>
            <TouchableOpacity>
              <Button
              style={styles.cancelBtn}
              onPress={toggleDatePicker}
              >Cancel</Button>
            </TouchableOpacity>
          </View>   
        </>
        )}
    
       {!showPicker && (
       <TextInput 
          placeholder='Select Date'
          value={dateOfPeriod}
          onFocus={() => setShowPicker(true)}
          onChangeText={setDateOfPeriod}
          placeholderTextColor={"#000"}
          editable={false}
          onPressIn={toggleDatePicker}
          style={styles.input}
          />  )}

        {/* Use a light status bar on iOS to account for the black space above the modal */}
        <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  datePicker: {
    width: 320, 
    height: 200,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cancelBtn: {
    backgroundColor: 'blue',
    marginTop: 20,
  },
  containBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
