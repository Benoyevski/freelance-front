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
import Headerlk from "../../components/HeaderLK/Headerlk";
import { fetchUsers } from "../../features/userSlice";
import io from "socket.io-client";
import { serverUrl } from "../../serverUrl";
import { addsocket } from "../../features/applicationSlice";
const OrderPage = React.memo(() => {
  
  const dispatch = useDispatch();
  const [socket,setSocket]= useState(null)
  const id = useSelector((state) => state.application.id);
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchOrders());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  useEffect(()=>{
    dispatch(addsocket(io(`${serverUrl}`)));
    setSocket(io(`${serverUrl}`))
  },[])


  useEffect(() => {
    socket?.emit("newUser", id);
  }, [socket,id]);

  const user = useSelector((state) =>
    state.user.users?.find((item) => item._id === id)
  );
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
    <>
      {" "}
      <Headerlk />
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
                <h2 className={styles.textWorkzilla}>Workzilla</h2>
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
                  Заказы
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
          <div
            style={{
              width: "20%",
              height: "70vh",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
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
                <div className={styles.ordersList}>
                  {filteredBySearchAndCategory.map((order) => {
                    return <Order key={order._id} order={order} user={user} socket ={socket} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={styles.dividerImg}>
          {" "}
          <div>
            <img
              src="https://work-zilla.com/pic-characters.7fb6b3a9e51fa19bd08b.svg"
              alt="workzilla"
            />
          </div>
        </div>
      </div>
    </>
  );
});

export default OrderPage;
