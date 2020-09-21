import uuid from "uuid";

export const millisecondsToHuman = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);

  const humanized = [
    pad(hours.toString(), 2),
    pad(minutes.toString(), 2),
    pad(seconds.toString(), 2),
  ].join(":");

  return humanized;
};

const pad = (numberString: string, size: number): string => {
  let padded = numberString;
  while (padded.length < size) {
    padded = `0${padded}`;
  }
  return padded;
};

export const newTimer = (attrs: { title?: string; project?: string } = {}) => {
  const timer = {
    title: attrs.title || "Timer",
    project: attrs.project || "Project",
    id: uuid.v4(),
    elapsed: 0,
    isRunning: false,
  };

  return timer;
};
