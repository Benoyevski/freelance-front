import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage";
import TasksPage from "./pages/Taskspage/TasksPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
