import React, { useCallback, useState } from "react";
import { TimerProps, EditableTimerProps } from "../model/Timer";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export type Props = TimerProps & {
  onFormSubmit: (timer: EditableTimerProps) => void;
  onRemoveTimer: (id: string) => void;
  onStartPress: (id: string) => void;
  onStopPress: (id: string) => void;
};

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  onFormSubmit,
  onRemoveTimer,
  onStartPress,
  onStopPress,
}: Props): JSX.Element {
  const initialState = { editFormOpen: false };
  const [state, setState] = useState(initialState);
  const { editFormOpen } = state;

  const openForm = useCallback(() => {
    setState({ editFormOpen: true });
  }, [setState]);
  const closeForm = useCallback(() => {
    setState({ editFormOpen: false });
  }, [setState]);
  const handleSubmit = useCallback(
    (timer: EditableTimerProps) => {
      onFormSubmit(timer);
      closeForm();
    },
    [setState, onFormSubmit, closeForm]
  );
  const handleRemoveTimer = useCallback(() => {
    onRemoveTimer(id);
  }, [id, onRemoveTimer]);
  const handleStartPress = useCallback(() => {
    onStartPress(id);
  }, [id, onStartPress]);
  const handleStopPress = useCallback(() => {
    onStopPress(id);
  }, [id, onStopPress]);

  if (editFormOpen) {
    return (
      <TimerForm
        id={id}
        title={title}
        project={project}
        onFormSubmit={handleSubmit}
        onFormClose={closeForm}
      />
    );
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
      onEditPress={openForm}
      onRemovePress={handleRemoveTimer}
      onStart={handleStartPress}
      onStop={handleStopPress}
    />
  );
}
