import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, unFollow } from "../../features/orderSlice";
import { fetchUsers } from "../../features/userSlice";
import styles from "../Cabinet/follow.module.css";
import Headerlk from "../HeaderLK/Headerlk";
import { MagnifyingGlass } from "react-loader-spinner"

const Follow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchUsers());
  }, []);

  const orders = useSelector((state) => state.order.orders);

  const id = useSelector((state) => state.application.id);
  const user = useSelector((state) =>
    state.user.users.find((item) => item._id === id)
  );
  const loading = useSelector((state) => state.user.load);

  const handleUnFollow = (orderId) => {
    dispatch(unFollow({ orderId, id }));
  };

  if (loading) {
    return <div style={{ width: "20%",height: '70vh', margin: "auto", display: 'flex', justifyContent: 'center', alignItems: "center", flexDirection: "column" }}>
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
  </div>;
  }
  return (
    <>
      <Headerlk />
      <div className={styles.follow_orders}>
        <h2>Задания, на которые вы отозвались</h2>
        <hr />
        <div>
          {user &&
            user.followOrders.map((i) => {
              return (
                <div className={styles.follow_order_card} key={i._id}>
                  <div className={styles.headOrder}>
                    <h3>{i.title}</h3>
                    <div className={styles.headOrder_imgs}>
                      <span className={styles.watch}>
                        <img src="watch.svg" alt="" />
                        {i.workTime + " ч"}
                      </span>
                      <span className={styles.money}>
                        <img src="money.svg" alt="" />
                        {i.price}
                      </span>
                    </div>
                  </div>
                  <div className={styles.text_and_btn}>
                    <p>{i.text}</p>
                    <button
                      onClick={() => handleUnFollow(i._id)}
                      className={styles.remove_btn}
                    >
                      Удалить
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Follow;
