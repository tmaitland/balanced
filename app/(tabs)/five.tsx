import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Title } from 'react-native-paper';
import ArticleCards from '@/components/ArticleCards';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title style={styles.title}>Explore Resources to help you navigate your journey.</Title>
        <Text style={styles.smallTitle}>Understanding your cycle</Text>
        <View style={styles.flexContainer}>
            <ScrollView horizontal={true}>
              <ArticleCards cardTitle="What is period flu?" extLink='https://www.webmd.com/women/pms/period-flu'  />
              <ArticleCards cardTitle="The No-period pill. Safe or not?" extLink='https://www.webmd.com/sex/birth-control/features/no-period-pills' />
              <ArticleCards cardTitle="Menorrhagia (Heavy Period)" extLink='https://www.webmd.com/women/heavy-period-causes-treatments' />
            </ScrollView>
        </View>      
        <Text style={styles.smallTitle}>How to make your period easier</Text>
        <View style={styles.flexContainer}>
            <ScrollView horizontal={true}>
              <ArticleCards cardTitle="Period 101" extLink='https://www.webmd.com/teens/video/period-101'  />
              <ArticleCards cardTitle="What is PMS?" extLink='https://www.plannedparenthood.org/learn/health-and-wellness/menstruation/what-can-i-do-about-cramps-and-pms' />
              <ArticleCards cardTitle="6 Self-care Habits That Ease PMS Symptoms" extLink='https://www.health.com/condition/menstruation/pms-symptoms-self-care' />
            </ScrollView>
        </View> 
        <Text style={styles.smallTitle}>Medical Resources</Text>
        <View style={styles.flexContainer}>
            <ScrollView horizontal={true}>
              <ArticleCards cardTitle="Resources for Women's Health" extLink='https://www.ahrq.gov/prevention/resources/womens-health.html'  />
              <ArticleCards cardTitle="A Lifetime of Women's Health Care Services" extLink='https://www.adventhealth.com/womens-health-care' />
              <ArticleCards cardTitle="UF Health's Women's Center" extLink='https://ufhealth.org/locations/uf-health-womens-center-medical-plaza' />
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
