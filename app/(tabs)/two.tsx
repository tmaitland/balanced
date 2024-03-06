import { StyleSheet } from 'react-native';
import {Calendar} from 'react-native-calendars';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';
// import { Button } from 'react-native-paper';

export default function TabTwoScreen() {
  const selectedDates = [];
  return (
    <View style={styles.container}>
     <FontAwesome name="bell" size={24} color="gray" style={{position: "relative", left: 150, marginTop: 20}} />
     <Calendar style={styles.Calendar}
      markingType={'period'}
       onDayPress={day => {
        selectedDates.push(day.dateString);
      }}
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      enableSwipeMonths={true}
      theme={{
        selectedDayBackgroundColor: '#00adf5',
      }}
     />
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
  Calendar: {
    width: 350,
    marginTop: 20,
  }
});
