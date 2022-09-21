import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage";
import TasksPage from "./pages/Taskspage/TasksPage";
import Task from "./components/Task/Task";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/tasks' element={<Task/>}/>
      </Routes>
    </>
  );
}

export default App;
