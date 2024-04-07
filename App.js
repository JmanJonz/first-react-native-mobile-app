import { StatusBar } from 'expo-status-bar';
import { Keyboard, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import  { Task }  from './components/Task.jsx';
import react, { useState} from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask(null);
  }

  const deleteTask = (i)=>{
    let dupList = [...taskList];
    dupList.splice(i, 1);
    setTaskList(dupList);
  }

  return (
    <View style={styles.container}>

    {/* todays tasks */}
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's Tasks</Text>
      <View style={styles.items}>
        {/* This is where the tasks will go */}
        {
          taskList.map((tascc, index)=>{
            return <TouchableOpacity key={index} onPress={() => {deleteTask(index)}}>
                        <Task text={tascc} />
                    </TouchableOpacity>
          })
        }
      </View>
    </View>

    {/* write a task */}
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
    >
      <TextInput value={task} onChangeText={text => setTask(text)} style={styles.input} placeholder='Write A Task...'/>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
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
    fontWeight: "bold",
    marginBottom: 15
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#def7e4",
    borderWidth: 3
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#def7e4",
    borderWidth: 3


  }
});
