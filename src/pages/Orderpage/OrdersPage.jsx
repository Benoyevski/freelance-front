import React from "react";
import Headerlk from "../../components/HeaderLK/Headerlk";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Order from "../../components/Order/Order";
import Task from "../../components/Task/Task";
import SideNavBar from "../../components/SideNavBar/SideNavBar";
import { fetchOrders } from "../../features/orderSlice";
import styles from "../Orderpage/orders.module.css";

const OrderPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  const orders = useSelector((state) => state.order.orders);
  return (
    <>
      <Headerlk />
      <div className="container">
        <div className={styles.orders_block}>
         <div> <div className={styles.order_title}>
            <h2>Все заказы</h2>
          </div>
          <div>
            {orders.map((order) => {
              return <Order key={order._id} order={order} />;
            })}
          </div></div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
