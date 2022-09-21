import React, { useState } from "react";
import styles from './login.module.css'

const Login = ({activeLogin, setActiveLogin}) => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    

    const handleLogin = () => {

    }
  return (
    <div
      className={activeLogin ? styles.nomodal : styles.modal}
      onClick={() => setActiveLogin(false)}
    >
      <form className={styles.content} onClick={(e) => e.stopPropagation()}>
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
        <button onClick={(e) => handleLogin(e)} className={styles.btn}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
