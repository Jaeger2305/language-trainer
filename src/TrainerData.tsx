import {useCallback, useState} from "react";
import tasks from "./database/words.json";
import Trainer from "./Trainer";
import {TrainerItem} from "./types";

const getRandomTask = (): TrainerItem => {
  const randomIndex = Math.floor(Math.random() * tasks.length);
  const randomTask = tasks[randomIndex];
  return randomTask as TrainerItem; // needs typecasting because json doesn't recognise the der/die/das type
};

export function TrainerData() {
  const [currentTask, setCurrentTask] = useState(tasks[0] as TrainerItem);
  const onNext = useCallback(() => setCurrentTask(getRandomTask()), []);
  return <Trainer onNext={onNext} currentTask={currentTask} />;
}
