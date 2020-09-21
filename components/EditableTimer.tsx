import React from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export type Props = {
  id: number;
  title: string;
  project: string;
  elapsed: number;
  isRunning: boolean;
  editFormOpen: boolean;
};

export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}: Props): JSX.Element {
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