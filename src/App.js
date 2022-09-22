import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage"
import Footer from "./components/Footer/Footer";
import OrderPage from "./pages/Orderpage/OrdersPage";
import Task from "./components/Task/Task";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tasks" element={<Task/>} />
        <Route path="/orders" element= {<OrderPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
