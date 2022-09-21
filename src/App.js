import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage";
import TasksPage from "./pages/Taskspage/TasksPage";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path='/tasks' element={<TasksPage/>}/>
      </Routes>
    </>
  );
}

export default App;
