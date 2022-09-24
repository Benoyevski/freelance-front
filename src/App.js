import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage"
import Footer from "./components/Footer/Footer";
import OrderPage from "./pages/Orderpage/OrdersPage";
import Task from "./components/Task/Task";
import Follow from "./components/Cabinet/Follow";
import { useSelector } from "react-redux";

function App() {
  const token = useSelector((state)=> state.application.token)
  const role = useSelector((state)=> state.order.role)
 if(token){
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




