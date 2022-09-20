import React from "react";
import styles from "../Mainpage/mainPage.module.css";
const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.customer}>
        <div className={styles.title_and_btns}>
          <h1 className={styles.title}>
            Исполнители для <br /> любых заданий
          </h1>
          <div className={styles.btns}>
            <div className={styles.find_btn}>Найти исполнителя</div>
            <div className={styles.become_btn}>Стать исполнителем</div>
          </div>
        </div>
        <img src="customer.svg" alt="" />
      </div>
    </div>
  );
};

export default MainPage;
