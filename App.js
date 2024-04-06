import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  { Task }  from './components/Task.jsx';

export default function App() {
  return (
    <View style={styles.container}>

    {/* todays tasks */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <View style={styles.items}>
        {/* This is where the tasks will go */}
        <Task text={"Task 1"}></Task>
        <Task text={"Task 2"}></Task>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBA2FF'
  },
  // Looks like this is where you add your styles instead of
  // a css file...
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold"
  },
  items: {}
});
