import React, { useCallback, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import uuid from "uuid";
import EditableTimer from "./components/EditableTimer";
import ToggleableTimerForm from "./components/ToggleableTimerForm";
import { EditableTimerProps, TimerProps } from "./model/Timer";
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
  timerListContainer: { flex: 1 },
});

type State = {
  timers: readonly TimerProps[];
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
  const onTimerEdit = useCallback(
    (timerProps: EditableTimerProps) => {
      const updatedTimers = timers.map((timer) => {
        if (timer.id === timerProps.id) {
          const { title, project } = timerProps;

          return {
            ...timer,
            title,
            project,
          };
        }

        return timer;
      });

      setState({ timers: updatedTimers });
    },
    [timers, setState]
  );
  const onRemoveTimer = useCallback(
    (id: string) => {
      const updatedTimers = timers.filter((timer) => timer.id !== id);
      setState({ timers: updatedTimers });
    },
    [setState, timers]
  );
  const toggleTimer = useCallback(
    (id: string) => {
      const updatedTimers = timers.map((timer) => {
        if (timer.id === id) {
          return {
            ...timer,
            isRunning: !timer.isRunning,
          };
        }

        return timer;
      });

      setState({ timers: updatedTimers });
    },
    [setState, timers]
  );

  useEffect(() => {
    const TIME_INTERVAL = 1000;

    const intervalId = setInterval(() => {
      const updatedTimers = timers.map((timer) => {
        const { elapsed, isRunning } = timer;

        return {
          ...timer,
          elapsed: isRunning ? elapsed + TIME_INTERVAL : elapsed,
        };
      });

      setState({ timers: updatedTimers });
    }, TIME_INTERVAL);

    return () => clearInterval(intervalId);
  });

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={styles.timerListContainer}
      >
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
              onFormSubmit={onTimerEdit}
              onRemoveTimer={onRemoveTimer}
              onStartPress={toggleTimer}
              onStopPress={toggleTimer}
            />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}
