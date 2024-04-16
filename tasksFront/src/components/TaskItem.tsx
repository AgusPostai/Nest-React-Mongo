import { Task } from "../interfaces/task.interface";
import { useTasks } from "../context/useTasks";
import {IoCheckmarkDone, IoTrash} from "react-icons/io5"

interface Props {
  task: Task;
}

function TaskItem({ task }: Props) {
  const { deleteTask, updateTask } = useTasks();
  return (
    <div
      key={task._id}
      className="bg-gray-900 p-2 my-2 fñex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <div>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
      </div>

      <div className="flex gap-x-2">
        <IoCheckmarkDone
          onClick={() => {
            updateTask(task._id, {
              done: !task.done,
            });
          }}
        />



        <IoTrash
          onClick={async () => {
            if (
              !window.confirm(
                "estas seguro de que queres eliminar esta tarea? "))
              return;
            await deleteTask(task._id);
          }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
