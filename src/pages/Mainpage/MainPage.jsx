import React from "react";
import Header from "../../components/Header/Header";
import styles from "../Mainpage/mainPage.module.css";
const MainPage = () => {
  return (
    <div className={styles.background}>
      <Header />
      <div className={styles.main_container}>
        <div className={styles.customer}>
          <div className={styles.title_and_btns}>
            <h1 className={styles.title}>
              Исполнители для <br /> любых заданий
            </h1>
            <div className={styles.btns}>
              <div className={styles.find_btn}>
                <p>Найти исполнителя</p>
              </div>
              <div className={styles.become_btn}>
                <p>Стать исполнителем</p>
              </div>
            </div>
          </div>
          <img src="customer.svg" alt="" />
        </div>
      </div>
      <img className={styles.howItWork} src="howWork.png" alt="" />

      <h1 className={styles.benefits_title}>Наши преимущества</h1>
      <div className={styles.benefits}>
        <img className={styles.hands_logo} src="hands.svg" alt="" />
        <div>
          <img src="ii.svg" alt="" />
          <span>Искусственный интеллект</span>
          <p>
            Специально обученная нейронная сеть анализирует все параметры и
            подбирает лучших исполнителей именно для вашего задания
          </p>
        </div>
        <div>
          <img src="ic-pay.svg" alt="" />
          <span>Защищенные платежи</span>
          <p>
            Ваш платеж будет переведен исполнителю только после подтверждения
            работы
          </p>
        </div>
        <div>
          <img src="ic-refund.svg" alt="" />
          <span>Гарантия возврата</span>
          <p>
            Вы всегда сможете вернуть свои деньги, если результат работы вас не
            устроит
          </p>
        </div>
        <div>
          <img src="ic-find.svg" alt="" />
          <span>Надежные исполнители</span>
          <p>
            Исполнители допускаются к работе по результатам тестирования и при
            выполнении всех обязательных требований
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
