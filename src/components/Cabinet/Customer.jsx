import React, { useEffect, useState } from "react";
import { addsocket } from "../../features/applicationSlice";
import { useDispatch, useSelector } from "react-redux";
import { acceptFollow, addUser, fetchOrders, unFollow } from "../../features/orderSlice";
import { fetchUsers } from "../../features/userSlice";
import { chanprice } from "../../features/userSlice";
import { acceptUser } from "../../features/orderSlice";
import styles from "../Cabinet/customer.module.css";
import Headerlk from "../HeaderLK/Headerlk";
import io from "socket.io-client";
import { changeprice } from "../../features/userSlice";
import Order from "../Order/Order";
import { ToastContainer, toast } from "react-toastify";

import { MagnifyingGlass } from "react-loader-spinner"
import { serverUrl } from "../../serverUrl";



const Customer = () => {
  const socket = useSelector((state)=> state.application.socket)
  const [price,setPrice] = useState(0)
  
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalFreelancers, setModalFreelancers] = useState(null);

  useEffect(() => {
    dispatch(fetchOrders());
    dispatch(fetchUsers());
  }, [dispatch]);

  const notify = () =>
    toast("Вам пришло уведомление!", {
      type: "error",
    });

  const orders = useSelector((state) => state.order.orders);

  const id = useSelector((state) => state.application.id);
  const loading = useSelector((state) => state.user.load);

  useEffect(()=>{
    dispatch(addsocket(io(`${serverUrl}`)));
  },[])


  useEffect(() => {
    socket?.emit("newUser", id);
  }, [socket,id]);
useEffect(()=>{
  socket?.on("getNotif",(data)=>{
    notify()
    dispatch(addUser({user:data.senderId,orderId:data.order}))


  })
},[socket])
  const handleOpenModal = (i) => {
    setPrice(i.price)
    setModal(true);
    setModalFreelancers(i);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleAccept = (userId,user, orderId) => {
    dispatch(chanprice({userId,id,price}))
    dispatch(acceptFollow({ userId, orderId }));
    dispatch(acceptUser({orderId,user}))
    dispatch(changeprice({price,id,userId}))
   
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
      <div className={styles.customer_page}>
        <div className={styles.freelancers}>
          {modal ? (
            <div onClick={handleCloseModal} className={styles.modal_list}>
              <h3>Откликнулись</h3>
              {modalFreelancers === null ? (
                <p>Пока никто не отозвался</p>
              ) : (
                <div>
                  {modalFreelancers.freelancers.map((item) => {
                    return (
                      <div key={item._id} className={styles.freelancer}>
                        <h4>{item.login}</h4>
                        <div className={styles.rating}>★★★★★</div>
                        <button
                          onClick={() =>
                            handleAccept(item._id,item, modalFreelancers._id)
                          }
                        >
                          Принять
                        </button>
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
                    <div className={styles.accepted_info}>
                     {i.accepted.length < 1 ? " Пока никто не выполняет задание"
                      :
                      i.accepted.map((item) => {

                        return <p>Выполняет: <h4>{item.login}</h4> </p>;
                      })}
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
};

export default Customer;
