import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../features/orderSlice";
import { fetchUsers } from "../../features/userSlice";
import styles from "../Cabinet/follow.module.css";
import Headerlk from "../HeaderLK/Headerlk";
import Order from "../Order/Order";

const Follow = () => {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchOrders())
    dispatch(fetchUsers());
  }, [dispatch]);

  const orders = useSelector(state => state.order.orders)
  
  const id = useSelector((state) => state.application.id);
  const user = useSelector((state) =>
    state.user.users.find((item) => item._id === id)
  );
  const loading = useSelector(state => state.user.load)

  if(loading) {
    return <div>LOADING...</div>
  }
  return (
    <>
      <Headerlk />
      <div className={styles.follow_orders}>
        <h2>Задания, на которые вы отозвались</h2>
        <hr />
        <div>
          {user && user.followOrders.map((i) => {
            return (
              <div className={styles.follow_order_card} key={i._id}>
                <h3>{i.title}</h3>
                <p>{i.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Follow;
