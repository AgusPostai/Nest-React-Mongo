const API = "http://localhost:3000/api";
import { Task } from "../interfaces/task.interface";



export const createTaskRequest = (task: Task) =>
  fetch(`${API}/tasks`, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });

  export const getTaskRequest = () => fetch(`${API}/tasks`)