import React from "react";
import { StyleSheet, View } from "react-native";
import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

export type Props = { isOpen: boolean };

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingHorizontal: 15,
  },
});

export default function ToggleableTimerForm({ isOpen }: Props): JSX.Element {
  return (
    <View style={[styles.container, !isOpen && styles.buttonContainer]}>
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton
          title="+"
          color="black"
          isSmall={false}
          onPress={() => {}}
        />
      )}
    </View>
  );
}
