import { useTasks } from "../context/useTasks";

function TaskList() {
 
 const {tasks} = useTasks()

 
  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
