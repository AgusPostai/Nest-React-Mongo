import { createContext, useState, useEffect } from "react";
import { getTaskRequest } from "../api/tasks";
import { CreateTask, Task } from "../interfaces/task.interface";

interface TaskContextValue {
  tasks: Task[];
  createTask: (task: CreateTask) => void;
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    getTaskRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = (task:CreateTask) => {
    console.log(task)
  }


  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
