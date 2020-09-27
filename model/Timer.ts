export type Timer = EditableTimerProps & {
  id: string;
  elapsed: number;
  isRunning: boolean;
};

export type EditableTimerProps = {
  title: string;
  project: string;
};
