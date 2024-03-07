import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Cards from '@/components/Cards';
import MediaCards from '@/components/MediaCards';
import ArticleCards from '@/components/ArticleCards';


function FoodScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView>
        <Cards 
          cardTitle="Nutrition Insight" 
          cardContent="You may benefit from eating foods rich in  omega-3 fatty acids, vitamin D, or magnesium during the Follicular phase."
          name="lightbulb-o"
          size={20}
          color="white"  
        />
       <MediaCards 
          cardTitle="Calories" 
          cardText="Monitor your energy consumption."
          source='https://picsum.photos/700'
        >
        </MediaCards>
        <Cards 
          cardTitle="Add Breakfast" 
          cardContent="Recommended calories: 480"
          name="apple"
          size={20}
          color="white"/>
        <Cards 
          cardTitle="Add Lunch" 
          cardContent="Recommended calories: 580"
          name="cutlery"
          size={20}
          color="white"/>
      </ScrollView>
    </View>
  );
}

function ExerciseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator>
      <Cards 
          cardTitle="Exercise Insight" 
          cardContent="Take advantage of your burst of energy. Try any form of HIIT, Cardio, Strength training."
          name="lightbulb-o"
          size={20}
          color="white"  
        />
       <MediaCards 
          cardTitle="Average Calories Burned" 
          cardText="Exercise to burn calories."
          source='https://picsum.photos/700'
        >
        </MediaCards>
        <Cards 
          cardTitle="Add Exercise" 
          cardContent="Log Exercise"
          name="plus-circle"
          size={20}
          color="white"/>
        <Cards 
          cardTitle="Add Steps" 
          cardContent="Log Steps"
          name="plus-circle"
          size={20}
          color="white"/>
      </ScrollView>
    </View>
  );
}
function SleepScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator>
        <Cards 
            cardTitle="Sleep Insight" 
            cardContent="You may feel that your energy is starting to rise during this phase. You may find that you're less tired than you have been the past few days."
            name="lightbulb-o"
            size={20}
            color="white"  
          />
        <MediaCards 
            cardTitle="Average Sleep Hours" 
            cardText="Sleep more to maintain mood and overall health."
            source='https://picsum.photos/700'
          >
          </MediaCards>
          <Cards 
            cardTitle="Add Hours" 
            cardContent="Log Sleep"
            name="plus-circle"
            size={20}
            color="white"/>
      </ScrollView>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
export default function TabTwoScreen() {
  return (
    <NavigationContainer theme={DefaultTheme} independent={true}>
    <Tab.Navigator>
      <Tab.Screen name="Food" component={FoodScreen} />
      <Tab.Screen name="Exercise" component={ExerciseScreen} />
      <Tab.Screen name="Sleep" component={SleepScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },

});
