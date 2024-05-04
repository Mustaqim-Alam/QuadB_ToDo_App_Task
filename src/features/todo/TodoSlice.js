import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state with sample todos
const initialState = {
  todos: [{ id: 1, text: "Hello world", completed: false }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Adds a new todo with a unique ID and text from the action's payload
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        completed: false, // Ensure new todos are not completed
      };
      state.todos.push(newTodo);
    },
    // Removes a todo based on the ID in the action's payload
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Toggles the completion status of a todo
    toggleCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    // Edits the text of an existing todo
    editTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
    },
    // Set todos from local storage
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

// Export actions for use elsewhere in the app
export const { addTodo, removeTodo, toggleCompleted, editTodo, setTodos } = todoSlice.actions;

// Export the reducer to be included in the store
export default todoSlice.reducer;