export type TimerProps = EditableTimerProps & {
  elapsed: number;
  isRunning: boolean;
};

export type EditableTimerProps = {
  id: string;
  title: string;
  project: string;
};
