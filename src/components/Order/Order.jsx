import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "../../features/orderSlice";
import styles from "../Order/order.module.css";
import { fetchUsers, followFront } from "../../features/userSlice";

const Order = ({ order }) => {
  
  const id = useSelector((state) => state.application.id);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchUsers())
  },[])
  const user = useSelector((state) =>
    state.user.users.find((item) => item._id === id)
  );
  const handleFollow = (orderId) => {
    dispatch(follow({ id, orderId }));
    dispatch(followFront({ id, order }));
  };
  const token = useSelector((state) => state.application.token);



  return (
    <>
      <div className={styles.order}>
        <div className={styles.order_title}>
          <h3>{order.title}</h3>
          <div className={styles.order_price}>
            <div className={styles.price_item}>
              <ion-icon name="time-outline"></ion-icon>
              <span>{order.workTime} </span>
            </div>

            <div className={styles.price_item}>
              <ion-icon name="wallet-outline"></ion-icon>
              <h4>{order.price}</h4>
            </div>
          </div>
        </div>

        <div className={styles.order_text}>
          <p>{order.text}</p>
        </div>
        <div>
          <div className={styles.order_btn}>
            {token && (
              <button
                onClick={() => handleFollow(order._id)}
                className={styles.order_btn}
              >
                {order.freelancers.find((item) => item._id === id)
                  ? "Уже откликнулись"
                  : "Откликнуться"}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
