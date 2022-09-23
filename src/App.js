import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage"
import Footer from "./components/Footer/Footer";
import OrderPage from "./pages/Orderpage/OrdersPage";
import Task from "./components/Task/Task";
import Follow from "./components/Cabinet/Follow";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tasks" element={<Task/>} />
        <Route path="/orders" element= {<OrderPage/>}/>
        <Route path="/cabinet" element={<Follow/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
