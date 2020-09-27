import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { EditableTimerProps } from "../model/Timer";
import TimerButton from "./TimerButton";
import TimerForm from "./TimerForm";

export type Props = {
  onFormSubmit: (timer: EditableTimerProps) => void;
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonContainer: {
    paddingHorizontal: 15,
  },
});

export default function ToggleableTimerForm({
  onFormSubmit,
}: Props): JSX.Element {
  const initialState = { isOpen: false };
  const [state, setState] = useState(initialState);
  const { isOpen } = state;
  const handleFormOpen = useCallback(() => {
    setState({ isOpen: true });
  }, [useState]);
  const handleFormClose = useCallback(() => {
    setState({ isOpen: false });
  }, [useState]);
  const handleFormSubmit = useCallback(
    (timer: EditableTimerProps) => {
      onFormSubmit(timer);
      setState({ isOpen: false });
    },
    [useState, onFormSubmit]
  );

  return (
    <View style={[styles.container, !isOpen && styles.buttonContainer]}>
      {isOpen ? (
        <TimerForm
          onFormSubmit={handleFormSubmit}
          onFormClose={handleFormClose}
        />
      ) : (
        <TimerButton
          title="+"
          color="black"
          isSmall={false}
          onPress={handleFormOpen}
        />
      )}
    </View>
  );
}
