import { createContext, useState, useEffect } from "react";
import { getTaskRequest } from "../api/tasks";
import { Task } from "../interfaces/task.interface";

interface TaskContextValue {
  tasks: Task[];
}

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
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

  return (
    <TaskContext.Provider
      value={{
        tasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
