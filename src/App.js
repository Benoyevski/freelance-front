
import "./App.css";
import MainPage from "./pages/Mainpage/MainPage";
import { Routes, Route } from "react-router-dom";
import Headerlk from "./components/HeaderLK/Headerlk"
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <Headerlk/>
      <Task/>
    </>
  );
}

export default App;
