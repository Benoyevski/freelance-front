import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow } from "../../features/orderSlice";
import styles from "../Order/order.module.css";
import { followFront } from "../../features/userSlice";

const Order = ({ order, user,socket }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.application.id);

  const handleFollow = (orderId,userId) => {
    socket.emit("notif",{
      senderId:user,
      receiverId:userId,
      order:orderId
    })
    dispatch(follow({ id, orderId }));
    dispatch(followFront({ id, order }));
  };
  const token = useSelector((state) => state.application.token);

  // useEffect(()=>{
  //   setSocket(io("http://localhost:3030"));
  // },[])

  // useEffect(()=>{
  //   socket.emit("newUser",id)
  // },[socket,id])

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
                onClick={() => handleFollow(order._id,order.creator)}
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
