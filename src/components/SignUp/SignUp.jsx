import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authThunk } from "../../features/applicationSlice";
import styles from "./signup.module.css";

const SignUp = ({ activeAuth, setActiveAuth }) => {
  
  const dispatch = useDispatch()

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");

  const handleSignUp = ({login, password, name, surname, phone, mail}) => {
    dispatch(authThunk({login, password, name, surname, phone, mail}))
    setName("")
    setSurname("")
    setPhone("")
    setMail("")
    setLogin("")
    setPassword("")
  };

  const [step, setStep] = useState(0);

  return (
    <div
      className={activeAuth ? styles.nomodal : styles.modal}
      onClick={() => setActiveAuth(false)}
    >
      <form className={styles.content} onClick={(e) => e.stopPropagation()}>
        <h2>Регистрация</h2>
        <div></div>
        {step === 0 ? (
          <>
            <label>Имя:</label>
            <input
              type="text"
              placeholder="Введите имя:"
              className={styles.input}
              value={name}
              onChange={e => setName(e.target.value)}

            />
            <label>Фамилия:</label>
            <input
              type="text"
              placeholder="Введите фамилию:"
              className={styles.input}
              value={surname}
              onChange={e => setSurname(e.target.value)}

            />
            <label>Номер:</label>
            <input
              type="text"
              className={styles.input}
              placeholder="Введите номер телефона:"
              value={phone}
              onChange={e => setPhone(e.target.value)}

            />
            <label>Почта:</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Введите почту:"
              value={mail}
              onChange={e => setMail(e.target.value)}
            />
        
    
            <button className={styles.btn} onClick={()=> setStep(step+1)}>Далее</button>
          </>
        ) : (
          <>
          <label>Логин:</label>
            <input
              type="text"
              placeholder="Введите логин:"
              className={styles.input}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          <label>Пароль:</label>
            <input
              type="password"
              placeholder="Введите пароль:"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.btn} onClick={()=> setStep(step-1)}>Назад</button>
            <button onClick={(e) => handleSignUp({login, password, name, surname, phone, mail})} className={styles.btn}>
              Зарегистрироваться
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignUp;
