import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptFollow, fetchOrders, unFollow } from "../../features/orderSlice";
import { fetchUsers } from "../../features/userSlice";
import styles from "../Cabinet/customer.module.css";
import Headerlk from "../HeaderLK/Headerlk";
import Order from "../Order/Order";

const Customer = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalFreelancers, setModalFreelancers] = useState(null);

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

  const handleOpenModal = (i) => {
    setModal(true);
    setModalFreelancers(i);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleAccept = (userId, orderId) => {
    dispatch(acceptFollow({userId, orderId}))
  };

  if (loading) {
    return <div>LOADING...</div>;
  }
  return (
    <>
      <Headerlk />
      <div className={styles.customer_page}>
        <div className={styles.freelancers}>
          {modal ? (
            <div className={styles.modal_list} onClick={handleCloseModal}>
              <h3>Откликнулись</h3>
              {modalFreelancers === null ? (
                <p>Пока никто не отозвался</p>
              ) : (
                <div>
                  {modalFreelancers.freelancers.map((item) => {
                    return (
                      <div key={item._id} className={styles.freelancer}>
                        <h4>{item.login}</h4>
                        <div>rating ****</div>
                        <button onClick={() => handleAccept(item._id, modalFreelancers._id)}>Принять</button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ) : null}
        </div>
        <div className={styles.follow_orders}>
          <h2>
            Ваши добавленные задания
            <hr />
          </h2>

          <div>
            {orders.map((i) => {
              if (i.creator === id)
                return (
                  <div
                    onClick={() => handleOpenModal(i)}
                    className={styles.follow_order_card}
                    key={i._id}
                  >
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
                    </div>
                    <div>{i.accepted}</div>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
