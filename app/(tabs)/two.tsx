import React, { useState } from 'react';
import { StyleSheet, Modal, Button, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from 'react-native-paper';
// import { Button } from 'react-native-paper';

export default function TabTwoScreen() {
  const [events, setEvents] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [eventData, setEventData] = useState({});
  const [text, setText] = useState('');

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setShowModal(true);
  };
  

  const closeEventModal = () => {
    setShowModal(false);
    addEvent(selectedDate, { title: text });
    setText('');
  };
  

  const addEvent = (day, eventData) => {
    const date = day;
    setEvents((prevEvents) => ({
      ...prevEvents,
      [date]: [
        ...(prevEvents[date] || []),
        {
          id: Math.random().toString(),
          title: eventData.title,
        },
      ],
    }));
  };
  
  console.log('events', events)

  return (
    <View style={styles.container}>
      {/* <Calendar
        
      /> */}
      <Agenda
        style={styles.calendar}
        onDayPress={onDayPress}
        showClosingKnob={true}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
          },
        }}
        items={events}
        renderItem={(item) => (
          <View style={styles.agendaItem} key={item.id}>
            {item.title && <Text>{item.title}</Text>}
            {/* ... other event details */}
          </View>
        )}
      />

      <Modal visible={showModal} onRequestClose={closeEventModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={closeEventModal} />
          <View style={styles.modalContent}>
            {/* Your event creation form or component */}
            <TextInput multiline={true} onChangeText={text => setText(text)} placeholder='Add Event'/>
            {/* ... other event input fields */}
            <Button title="Save Event" onPress={closeEventModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendar: {
    width: 350,
    height: "auto",
    marginTop: 10,
  },
  agendaItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    justifyContent: 'center',
    height: 80,
  },
  modal: {
    height: 200,
    width: 320,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the transparency as needed
  },
  modalContent: {
    width: '80%', // Adjust the width as needed
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    color: 'purple',
  },

});
