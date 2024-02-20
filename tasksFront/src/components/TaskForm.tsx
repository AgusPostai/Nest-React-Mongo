function TaskForm() {
  return (
    <div>
      <form action=""></form>
      <input
        type="text"
        name="title"
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-86 block w-full my-2"
        placeholder="Write a title"
      />
      <textarea
        name="description"
        rows={3}
        className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-86 block w-full my-2 "
        placeholder="Write a title"
      ></textarea>
      <label htmlFor="">
        <input type="checkbox" />
        <span>Done</span>
      </label>
      <button>Save</button>
    </div>
  );
}

export default TaskForm;
