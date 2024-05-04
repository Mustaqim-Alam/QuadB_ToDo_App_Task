import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  removeTodo,
  editTodo,
  toggleCompleted,
  setTodos,
} from "../features/todo/TodoSlice";

function TaskList() {
  const todos = useSelector((state) => state.todos); // Renamed to avoid conflict
  const dispatch = useDispatch();

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos && savedTodos.length > 0) {
      dispatch(setTodos(savedTodos)); // Assuming you have a setTodos action
    }
  }, [dispatch]);

  // Save tasks to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 my-2 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
            todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
        >
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={todo.completed}
            onChange={() => dispatch(toggleCompleted(todo.id))}
          />
          {todo.completed ? (
            <div
              className={`w-full bg-transparent rounded-lg ${
                todo.completed ? "line-through" : ""
              }`}
            >
              {todo.text}
            </div>
          ) : (
            <input
              type="text"
              className={`outline-none w-full bg-transparent rounded-lg ${
                todo.completed ? "line-through" : ""
              }`}
              value={todo.text}
              onChange={(e) =>
                dispatch(editTodo({ id: todo.id, text: e.target.value }))
              }
            />
          )}
          {/* Delete Todo Button */}
          <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            ❌
          </button>
        </div>
      ))}
    </>
  );
}

export default TaskList;
