import { useEffect } from "react";
import { getTaskRequest } from "../api/tasks";

function TaskList() {

  useEffect(() => {
getTaskRequest()
.then((response) => response.json())
.then((data) => console.log(data))
  }, [])

  return (<div>TaskForm</div>
  )
}

export default TaskList;
