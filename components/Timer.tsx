import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TimerProps } from "../model/Timer";
import { millisecondsToHuman } from "../utils/TimerUtils";
import TimerButton from "./TimerButton";

export type Props = TimerProps & {
  onEditPress: () => void;
  onRemovePress: () => void;
  onStop: () => void;
  onStart: () => void;
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

export default function Timer(props: Props): JSX.Element {
  const { elapsed, title, project, onEditPress, onRemovePress } = props;
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
          onPress={onEditPress}
        />
        <TimerButton
          isSmall={true}
          color="blue"
          title="Remove"
          onPress={onRemovePress}
        />
      </View>
      {renderActionButton(props)}
    </View>
  );
}

function renderActionButton({
  isRunning,
  onStart,
  onStop,
}: Props): JSX.Element {
  if (isRunning) {
    return (
      <TimerButton
        isSmall={false}
        color="#21BA45"
        title="Stop"
        onPress={onStop}
      />
    );
  }

  return (
    <TimerButton
      isSmall={false}
      color="#21BA45"
      title="Start"
      onPress={onStart}
    />
  );
}
