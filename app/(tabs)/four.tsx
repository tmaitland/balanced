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
          cardTitle="Card Title" 
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="home"
          size={20}
          color=""  
        />
        <Cards 
          cardTitle="Card Title" 
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="home"
          size={20}
          color=""/>
      </ScrollView>
    </View>
  );
}

function ExerciseScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator>
        <MediaCards
          cardTitle="Card Title" 
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          source='https://picsum.photos/700'
        >
        </MediaCards>
        <MediaCards
          cardTitle="Card Title" 
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          source='https://picsum.photos/700'
        >
        </MediaCards>
        <MediaCards
          cardTitle="Card Title" 
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          source='https://picsum.photos/700'
        >
        </MediaCards>
        <MediaCards
          cardTitle="Card Title" 
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          source='https://picsum.photos/700'
        >
        </MediaCards>
      </ScrollView>
    </View>
  );
}
function SleepScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ScrollView showsVerticalScrollIndicator>
      <Cards 
          cardTitle="Card Title" 
          cardContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="home"
          size={20}
          color=""/>
           <MediaCards
          cardTitle="Card Title" 
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          source='https://picsum.photos/700'
        >
        </MediaCards>
        <MediaCards
          cardTitle="Card Title" 
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          source='https://picsum.photos/700'
        >
        </MediaCards>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
