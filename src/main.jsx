import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux"; // Importing the Provider component from react-redux
import { store } from "./app/store.js"; // Importing the Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  // Rendering the root component using ReactDOM.createRoot
  <Provider store={store}>
    {" "}
    {/* Providing the Redux store to the entire application using the Provider */}
    <App /> {/* Rendering the root component */}
  </Provider>
);