import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";

const styles = StyleSheet.create({
  appContainer: { flex: 1 },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#d6d7da",
  },
  title: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  timerList: { paddingBottom: 15 },
});

export default function App(): JSX.Element {
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView>
        <ToggleableTimerForm isOpen={true} />
        <EditableTimer
          id={1}
          title="Mow the lawn"
          project="House Chores"
          elapsed={43423}
          isRunning={true}
          editFormOpen={false}
        />
        <EditableTimer
          id={1}
          title="Mow the lawn"
          project="House Chores"
          elapsed={43423}
          isRunning={false}
          editFormOpen={true}
        />
      </ScrollView>
    </View>
  );
}
