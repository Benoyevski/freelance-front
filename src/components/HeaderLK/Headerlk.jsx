import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

import logo from "./logo.png";
const Headerlk = () => {
  return (
    <div className={styles.header_bg}>
      <div className={styles.headerLk_container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className={styles.nav_link}>
          <div className={styles.nav_link_item}>
              <div className={styles.header_icons}>
                <ion-icon name="checkbox-outline"></ion-icon>
              </div>
              <div>
                <Link to="/orders">Задание</Link>
              </div>
            </div>
            <div className={styles.nav_link_item}>
              <div className={styles.header_icons}>
              <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
              </div>
              <div>
              <Link to="/works">о нас</Link>
              </div>
            </div>
            <div className={styles.nav_link_item}>
              <div className={styles.header_icons}>
              <ion-icon name="people-outline"></ion-icon>
              </div>
              <div>
                <Link to="/works">Контакты</Link>
              </div>
            </div>
          </div>
          <div className={styles.nav_btn}>
            <div className={styles.nav_btn_icon}>
              <ion-icon name="notifications-outline"></ion-icon>
            </div>
            <div>
              <h4>300</h4>
            </div>
            <div>
              <button>Дать Задание</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerlk;
