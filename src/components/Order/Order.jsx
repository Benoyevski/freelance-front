import React from "react";
import styles from "../Order/order.module.css";
const Order = ({ order }) => {
  return (
    <div className={styles.order}>
      <div className={styles.order_title}>
        <h3>{order.title}</h3>
        <div className={styles.order_price}>
          <div className={styles.price_item}>
          <ion-icon name="time-outline"></ion-icon>
            <span>{order.workTime} </span>
           
          </div>
          
          <div className={styles.price_item}>
          <ion-icon name="wallet-outline"></ion-icon><h4>{order.price}</h4>
          </div>
        </div>
      </div>

      <div className={styles.order_text}>
        <p>{order.text}</p>
      </div>
      <div>
        <div className={styles.order_btn}><button className={styles.order_btn}>Откликнуться</button></div>
      </div>
    </div>
  );
};

export default Order;
