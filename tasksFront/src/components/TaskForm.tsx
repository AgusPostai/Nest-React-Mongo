import { FormEvent, ChangeEvent, useState } from "react";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setTask({ ...task, [e.target.name]: e.target.value });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      //console.log(task);
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-86 block w-full my-2"
            placeholder="Write a title"
            onChange={handleChange}
          />

          <textarea
            name="description"
            rows={3}
            className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-86 block w-full my-2 "
            placeholder="Write a title"
            onChange={handleChange}
          ></textarea>

          <label htmlFor="">
            <input type="checkbox" />
            <span>Done</span>
          </label>
          <button>Save</button>
        </form>
      </div>
    );
  };


export default TaskForm;
