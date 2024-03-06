import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Title } from 'react-native-paper';
import ArticleCards from '@/components/ArticleCards';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Title style={styles.title}>Explore Resources to help you navigate your journey.</Title>
        <Text style={styles.smallTitle}>Understanding your cycle</Text>
        <View style={styles.flexContainer}>
            <ScrollView horizontal={true}>
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com'  />
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com' />
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com' />
            </ScrollView>
        </View>      
        <Text style={styles.smallTitle}>How to make your period easier</Text>
        <View style={styles.flexContainer}>
            <ScrollView horizontal={true}>
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com'  />
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com' />
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com' />
            </ScrollView>
        </View> 
        <Text style={styles.smallTitle}>Medical Resources</Text>
        <View style={styles.flexContainer}>
            <ScrollView horizontal={true}>
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com'  />
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com' />
              <ArticleCards cardTitle="Article Title" extLink='https://www.google.com' />
            </ScrollView>
        </View> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    marginBottom: 20,
  },
  smallTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  flexContainer: {
    flex: 1,
  },
});
