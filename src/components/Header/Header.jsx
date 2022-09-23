import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import styles from "./header.module.css"



const Header = () => {

    const [activeLogin, setActiveLogin] = useState(false);
    const [activeAuth, setActiveAuth] = useState(false);

    return (
        <div className={styles.header_container}>
            <div className={styles.block}>
            <img src="https://cdn-icons-png.flaticon.com/512/5704/5704978.png" alt="" className={styles.img_logo}/>
           <h2 className={styles.company_name}>workzilla</h2>
            </div>
          
           <div className={styles.loginField}>
            <div className={styles.modalField}>
           <div className={styles.register} onClick={() => setActiveLogin(true)} >Войти</div> 
           <span>или</span>
           <div className={styles.register} onClick={() => setActiveAuth(true)}>Зарегистрироваться</div>
           </div>
           <Link to = "/orders"><button className={styles.btn}>Найти задание</button></Link>
           </div>
           <SignUp activeAuth={activeAuth} setActiveAuth={setActiveAuth} />
            <Login activeLogin={activeLogin} setActiveLogin={setActiveLogin} />
        </div>
    ); 
};

export default Header;