import "./App.css";
import Header from "./components/Header/Header";
import Headerlk from "./components/Headerlk";
import MainPage from "./pages/Mainpage/MainPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
