import React from "react";
import styles from "../styles/openPage.module.css";
const OpenPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.customer}>
        <div className={styles.title_and_btns}>
          <h1 className={styles.title}>
            Исполнители для <br /> любых заданий
          </h1>
          <div className={styles.btns}>
            <button>1</button>
            <button>2</button>
          </div>
        </div>
        <img src="customer.svg" alt="" />
      </div>
    </div>
  );
};

export default OpenPage;
