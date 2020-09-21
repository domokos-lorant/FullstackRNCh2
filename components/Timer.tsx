import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { millisecondsToHuman } from "../utils/TimerUtils";
import TimerButton from "./TimerButton";

export type Props = {
  id: number;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
};

const styles = StyleSheet.create({
  timerContainer: {
    backgroundColor: "white",
    borderColor: "#d6d7da",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  elapsedTime: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function Timer({ elapsed, title, project }: Props): JSX.Element {
  const elapsedString = millisecondsToHuman(elapsed);

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text>{project}</Text>
      <Text style={styles.elapsedTime}>{elapsedString}</Text>

      <View style={styles.buttonGroup}>
        <TimerButton
          isSmall={true}
          color="blue"
          title="Edit"
          onPress={() => {}}
        />
        <TimerButton
          isSmall={true}
          color="blue"
          title="Remove"
          onPress={() => {}}
        />
      </View>
      <TimerButton
        isSmall={false}
        color="#21BA45"
        title="Start"
        onPress={() => {}}
      />
    </View>
  );
}
