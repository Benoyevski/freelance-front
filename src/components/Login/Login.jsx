import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../features/applicationSlice";
import styles from './login.module.css'

const Login = ({activeLogin, setActiveLogin}) => {

    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    

    const handleLogin = (e,{login, password}) => {
      dispatch(loginThunk({login, password}))
      setLogin('')
      setPassword('')
    }

    const handleForm = (e) => {
      e.preventDefault()
      e.stopPropagation()
    }

  return (
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
  );
};

export default Login;
