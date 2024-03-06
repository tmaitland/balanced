import { StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "@/components/Themed";
import { Link, router } from 'expo-router'; 
import Cards from "@/components/Cards";
import SmallCards from "@/components/SmallCards";
import TextButton from "@/components/TextButton";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FontAwesome name="leaf" size={25} color="gray" style={{position: 'relative', top: 35}} />
        <Text style={styles.title}>Balanced</Text>
        <View style={[styles.flexContainer, { width: "100%", justifyContent: "center", alignContent: "center"}]}>
          <Image source={require('../../assets/images/circle-of-arrows-gray.png')} style={styles.arrowsImage} />
          <Text style={{position: "absolute", left: 125, top: 115, fontSize: 16, color: "gray" }}>Follicular Phase</Text>
          <TextButton
            title="17 days until next period"
            buttonText="Tap To Log Period"
            // go to health tab
            onPress={() => router.push('./two')} />
        </View>
        <Cards
          cardTitle="Today's Insight"
          cardContent="As you transition into the follicular phase, 
               you might notice a boost in your energy levels. 
               Take advantage of this fresh surge of energy."
          name="lightbulb-o"
          color="#fafafa"
          size={25}
        />
        <View style={styles.flexContainer}>
          <ScrollView horizontal={true}>
            <SmallCards
              cardTitle="Do"
              cardWidth={150}
               cardHeight={170}
              cardContent="Your energy starts to rise during this phase. 
              Use this time to start a new project or learn a new skill."
            />
            <SmallCards
              cardTitle="Eat"
              cardWidth={150}
               cardHeight={170}
              cardContent="You may benefit from eating foods rich in  
              omega-3 fatty acids, vitamin D, or magnesium during the Follicular phase."
            />
            <SmallCards
              cardTitle="Move"
              cardWidth={150}
               cardHeight={170}
              cardContent="Take advantage of your burst of energy. Try any form of HIIT, 
              Cardio, Strength training."
            />
          </ScrollView>
          <Cards
          cardTitle="How are you feeling today?"
          cardContent="Log Symptoms"
          name="plus-circle"
          color="#fafafa"
          size={25}
        />
          <Cards
          cardTitle="Nutrition Dashboard"
          cardContent="Log Food"
          name="plus-circle"
          color="#fafafa"
          size={25}
        />
        </View>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    maxWidth: "100%",
    height: "auto",
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    margin: 10,
    textAlign: "left",
    position: "relative",
    left: 25,
  },
  flexContainer: {
    flex: 1,
  },
  arrowsImage: {
    position: "relative",
    objectFit: "contain",
    maxWidth: 250,
    marginLeft: "18%",
    height: 250,
  },
});
