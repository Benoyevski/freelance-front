import React, { useState } from "react";

import { useEffect } from "react";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Order from "../../components/Order/Order";

import { fetchOrders } from "../../features/orderSlice";
import styles from "../Orderpage/orders.module.css";
import { fetchCategory } from "../../features/categoryesSlice";
import { MagnifyingGlass } from "react-loader-spinner";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const OrderPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchOrders());
  }, [dispatch]);

  const category = useSelector((state) => state.category.category);
  const orders = useSelector((state) => state.order.orders);
  const loading = useSelector((state) => state.order.loading);

  const [choice, setChoice] = useState(null);
  const [search, setSearch] = useState("");

  const filteredByCategory = orders.filter((order) => {
    if (choice === null) {
      return true;
    }
    return order.categoryId === choice._id;
  });

  const filteredBySearchAndCategory = filteredByCategory.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

  const [isExpendend, setIsExpendend] = useState(false);
  const handleClick = () => {
    setIsExpendend(!isExpendend);
  };

  const handleCategory = (category) => {
    setChoice(category);
  };

  return (
    <div className={styles.mainContainer}>
      <div
        className={
          isExpendend ? styles.sidebar_container : styles.sidebar_container_NX
        }
      >
        <div className={styles.nav_upper}>
          <div className={styles.nav_heading}>
            <div className={styles.nav_brand}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5704/5704978.png"
                alt=""
                className={styles.img_logo}
              />
              <h2>Workzilla</h2>
            </div>
            <div className={styles.nav_menu}>
              {category.map((el) => {
                return (
                  <div
                    key={el._id}
                    title={el.category}
                    className={
                      isExpendend ? styles.menu_item : styles.menu_item_NX
                    }
                    onClick={() => handleCategory(el)}
                  >
                    <img src={el.src} alt="" className={styles.img} />
                    {isExpendend && <p>{el.category}</p>}
                    {!isExpendend && (
                      <div className={styles.tooltip}>{el.category}</div>
                    )}
                  </div>
                );
              })}
              <button
                className={
                  isExpendend ? styles.returnBtnOpen : styles.returnBtnClose
                }
                onClick={() => setChoice(null)}
              >
                Все Заказы
              </button>
            </div>
            <button
              className={
                isExpendend
                  ? cn(styles.burger, styles.burger_out)
                  : cn(styles.burger, styles.burger1, styles.burger_in)
              }
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <div style={{ width: "5%", margin: "auto" }}>
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
          <p>Ожидайте идет загрузка...</p>
        </div>
      ) : (
        <div className="container">
          <div className={styles.orders_block}>
            <div className={styles.search}>
              <TextField
                size="normal"
                fullWidth
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                label="Поиск по ключевым словам..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <Search />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              {" "}
              <div className={styles.order_title}>
                <h2>Заказы</h2>
              </div>
              {!filteredByCategory.length && (
                <div>Пока никто не добавлял...</div>
              )}
              <div>
                {filteredBySearchAndCategory.map((order) => {
                  return <Order key={order._id} order={order} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
