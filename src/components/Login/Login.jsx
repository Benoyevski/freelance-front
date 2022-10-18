import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../features/applicationSlice";
import styles from './login.module.css'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = ({activeLogin, setActiveLogin}) => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    

    const Toaster = (text) => {
      toast.error(text, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    };

    const handleValidation = ({ login, password }) => {
      if (password === "") {
        Toaster("Пароль - обьязательное поле!");
        return false;
      } else if (login === '') {
        Toaster("Логин - обьязательное поле!");
        return false;
      } else if (password.length < 8) {
        Toaster("Пароль не должен быть меньше 8 символов!");
        return false;
      } 
      return true
    };

    const handleLogin = (e,{login, password}) => {
      e.preventDefault();
      if(handleValidation) {
        dispatch(loginThunk({login, password}))
        setLogin('')
        setPassword('')
      }
    }

    const handleForm = (e) => {
      e.preventDefault()
      e.stopPropagation()
    }

  return (
    <>
    <ToastContainer />
    <div
      className={activeLogin ? styles.nomodal : styles.modal}
      onClick={() => setActiveLogin(false)}
    >
      <form className={styles.content} onClick={(e) => handleForm(e)}>
        <h2>Войти</h2>
        <input
          type="text"
          placeholder="Введите логин"
          className={styles.input}
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          placeholder="Введите пароль"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleLogin(e, {login, password})} className={styles.btn}>
          Войти
        </button>
      </form>
    </div>
    </>
  );
};

export default Login;
