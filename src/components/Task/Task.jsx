import React from "react";
import styles from "../Task/task.module.css";
import { useState } from "react";
import { addOrder } from "../../features/taskSlice";
import { useDispatch, useSelector } from "react-redux";
const Task = () => {
  const dispatch = useDispatch()
  const id = useSelector((state)=> state.application.id)

  const [location,setLocation] = useState("")
  const [inner,setInner] = useState("")
  const [term,setTerm] = useState("")
  const [price,setPrice] = useState("")



  return (
    <div className="container">
      <h2>Создание задания</h2>
      <div className={styles.task_content}>
        <div className={styles.task_location}>
          <div className={styles.task_title}>
            <h3>Локация</h3>
          </div>
          <div className={styles.input_radio}>
            <div>
              <input type="radio" />
              <label for="radio1">
                Задание может выполнить исполнитель из любой локации
              </label>
            </div>
            <div>
              <input type="radio" />
              <input value={location} onChange={(e)=> setLocation(e.target.value)} type="text" placeholder="Выбрать город"></input>
            </div>
          </div>
        </div>
        <div className={styles.task_inner}>
          <div className={styles.task_title}>
            <h3>Описаниие</h3>
          </div>
          <div className={styles.textarea_block}>
            <textarea value={inner} onChange={(e)=> setInner(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div className={styles.task_term}>
          <div className={styles.task_title}>
            <h3>Срок Выполнения</h3>
          </div>
          <input value={term} onChange={(e)=>  setTerm(e.target.value)} className={styles.term_input} type="text" />
        </div>
        <div className={styles.task_price}>
          <div className={styles.task_title}>
            <h3>Стоимость</h3>
          </div>
          <input  value={price} onChange={(e)=> setPrice(e.target.value)} className={styles.term_price} type="text" />
        </div>
        <div className={styles.task_btn}>
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Отправить</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
