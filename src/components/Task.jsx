import React from "react";
import styles from "../components/task.module.css";

const Task = () => {
  return (
    <div className="container">
      <h2>Создание задания</h2>
      <div className={styles.task_content}>
        <div className={styles.task_location}>
          <h3>Локация</h3>
          <div className={styles.input_radio}>
            <div>
              <input type="radio" />
              <label for="radio1">
                Задание может выполнить исполнитель из любой локации
              </label>
            </div>
            <div>
              <input type="radio" />
              <input type="text" placeholder="Выбрать город"></input>
            </div>
          </div>
        </div>
        <div className={styles.task_inner}>
          <h3>Описаниие</h3>
          <div className={styles.textarea_block}><textarea name="" id="" cols="30" rows="10"></textarea></div>
        </div>
        <div className={styles.task_term}>
          <h3>Срок Выполнения</h3>
        </div>
        <div className={styles.task_price}>
          <h3>Стоимость</h3>
        </div>
      </div>
    </div>
  );
};

export default Task;
