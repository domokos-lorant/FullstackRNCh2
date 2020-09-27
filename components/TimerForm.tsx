import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { EditableTimerProps, Timer } from "../model/Timer";
import TimerButton from "./TimerButton";

export type Props = Partial<Timer> & {
  onFormClose: () => void;
  onFormSubmit: (timer: EditableTimerProps) => void;
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#D6D7DA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: { marginVertical: 8 },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: { height: 30, padding: 5, fontSize: 12 },
  textInputTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  buttonGroup: { flexDirection: "row", justifyContent: "space-between" },
});

export default function TimerForm({
  id,
  title,
  project,
  onFormClose,
  onFormSubmit,
}: Props): JSX.Element {
  const submitText = id ? "Update" : "Create";
  const initialState: EditableTimerProps = {
    title: id && title ? title : "",
    project: id && project ? project : "",
  };
  const [state, setState] = useState(initialState);
  const handleTitleChange = useCallback(
    (newTitle) => {
      setState({ ...state, title: newTitle });
    },
    [state, setState]
  );
  const handleProjectChange = useCallback(
    (newProject) => {
      setState({ ...state, project: newProject });
    },
    [state, setState]
  );
  const handleSubmit = useCallback(() => {
    const { title, project } = state;
    onFormSubmit({ title, project });
  }, [state, id, onFormSubmit]);

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Title</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={state.title}
            onChangeText={handleTitleChange}
          />
        </View>
      </View>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}>Project</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            underlineColorAndroid="transparent"
            value={state.project}
            onChangeText={handleProjectChange}
          />
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <TimerButton
          isSmall={true}
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          isSmall={true}
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </View>
    </View>
  );
}
