import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../Task/task.module.css";
import { useState } from "react";
import { addOrder } from "../../features/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import Headerlk from "../HeaderLK/Headerlk";
import { fetchCategory } from "../../features/categoryesSlice";
const Task = () => {
  const disptach = useDispatch();

  const category = useSelector((state) => state.category.category);
  const [categoryId, setCategoryId] = React.useState("");

  const handleChange = (event) => {
    setCategoryId(event.target.value);
  };
  const dispatch = useDispatch();
  const creator = useSelector((state) => state.application.id);

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [inner, setInner] = useState("");
  const [term, setTerm] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);



  const handleClick= ()=>{
    dispatch(addOrder({creator,price,inner,term,title,location,categoryId}))
    setLocation("")
    setInner("")
    setTerm("")
    setPrice("")
  }

  return (
    <>
      <Headerlk />
      <div className="container">
        <h2>Создание задания</h2>
        <div className={styles.task_content}>
          <div className={styles.task_location}>
            <div className={styles.task_title}>
              <h3>Локация</h3>
            </div>

            <div className={styles.input_radio}>
              <div>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  placeholder="Выбрать город"
                ></input>
              </div>
            </div>
          </div>
          <div className={styles.task_location}>
            <div className={styles.task_title}>
              <h3>Заголовок</h3>
            </div>

            <div className={styles.input_radio}>
              <div>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Заголовок"
                ></input>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.task_category}>
              <div>
                <h4>Выбери категорию :</h4>
              </div>
              <Box sx={{ minWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Категории
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={categoryId}
                    label="category"
                    onChange={handleChange}
                  >
                    {category.map((item) => {
                      return (
                        <MenuItem value={item._id}>{item.category}</MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
            </div>
          </div>
          <div className={styles.task_inner}>
            <div className={styles.task_title}>
              <h3>Описаниие</h3>
            </div>
            <div className={styles.textarea_block}>
              <textarea
                value={inner}
                onChange={(e) => setInner(e.target.value)}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div className={styles.task_term}>
            <div className={styles.task_title}>
              <h3>Срок Выполнения</h3>
            </div>
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className={styles.term_input}
              type="text"
            />
          </div>
          <div className={styles.task_price}>
            <div className={styles.task_title}>
              <h3>Стоимость</h3>
            </div>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={styles.term_price}
              type="text"
            />
          </div>
          <div className={styles.task_btn}>
            <button onClick={()=> handleClick()} className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Отправить</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
