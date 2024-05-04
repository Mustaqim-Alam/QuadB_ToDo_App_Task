import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <h1 className=" text-3xl py-4 font-bold font-serif">
        Quadb Tech - Todo Assignment
      </h1>

      <TaskInput />
      <TaskList />
    </>
  );
}

export default App;