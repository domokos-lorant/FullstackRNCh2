import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import uuid from "uuid";
import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import { EditableTimerProps, Timer } from "./model/Timer";
import { newTimer } from "./utils/TimerUtils";

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

type State = {
  timers: readonly Timer[];
};

export default function App(): JSX.Element {
  const initialState: State = {
    timers: [
      {
        id: uuid(),
        title: "Mow the lawn",
        project: "House Chores",
        elapsed: 43423,
        isRunning: true,
      },
      {
        id: uuid(),
        title: "Bake squash",
        project: "Kitchen Chores",
        elapsed: 55555,
        isRunning: true,
      },
    ],
  };
  const [state, setState] = useState(initialState);
  const { timers } = state;
  const onCreateTimer = useCallback(
    (timerProps: EditableTimerProps) => {
      setState({ timers: [newTimer(timerProps), ...state.timers] });
    },
    [state, setState]
  );

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <ScrollView>
        <ToggleableTimerForm onFormSubmit={onCreateTimer} />
        {timers.map(({ id, elapsed, isRunning, project, title }) => (
          <EditableTimer
            id={id}
            key={id}
            title={title}
            project={project}
            elapsed={elapsed}
            isRunning={isRunning}
          />
        ))}
      </ScrollView>
    </View>
  );
}
