import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

function TaskInput() {
  const [input, setInput] = useState(""); // State to hold the input value
  const dispatch = useDispatch(); // Dispatch function to dispatch actions

  const addTaskHandler = (e) => {
    e.preventDefault(); // Prevent form submission
    if (input.trim()) {
      // Check if input value is not empty
      dispatch(addTodo(input)); // Dispatch addTodo action with input value
      setInput(""); // Clear input field after adding todo
    } else {
      console.log("Please Enter task"); // Log message if input is empty
    }
  };

  return (
    <form onSubmit={addTaskHandler} className="flex">
      <input
        type="text"
        placeholder="Write Task here.."
        className="w-full rounded-l-lg px-3 py-2 outline-none duration-150 bg-slate-200 "
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        type="submit"
        className="rounded-r-lg px-5 text-xl py-1 bg-custom-bg text-black shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TaskInput;
