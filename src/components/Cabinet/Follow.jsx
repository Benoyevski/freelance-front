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
        <h3>Задания, на которые вы отозвались</h3>
        <hr />
        <div>
          {user && user.followOrders.map((i) => {
            return <div key={i._id}>{i.title}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Follow;
