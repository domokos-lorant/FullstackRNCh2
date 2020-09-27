import React, { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export type Props = {
  id: string;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
};

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
}: Props): JSX.Element {
  const initialState = { editFormOpen: false };
  const [state, setState] = useState(initialState);
  const { editFormOpen } = state;

  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
}
