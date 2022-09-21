import React from "react";
import Header from "../../components/Header/Header";
import styles from "../Mainpage/mainPage.module.css";
const MainPage = () => {
  
  return (
    <>
    <Header />
    <div className={styles.main_container}>
      <div className={styles.customer}>
        <div className={styles.title_and_btns}>
          <h1 className={styles.title}>
            Исполнители для <br /> любых заданий
          </h1>
          <div className={styles.btns}>
            <div className={styles.find_btn}><p>Найти исполнителя</p></div>
            <div className={styles.become_btn}><p>Стать исполнителем</p></div>
          </div>
        </div>
        <img src="customer.svg" alt="" />
      </div>
    </div>
    </>
    
  );
};

export default MainPage;
