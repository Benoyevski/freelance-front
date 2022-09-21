import React from 'react';
import styles from "./header.module.css"



const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.block}>
            <img src="https://cdn-icons-png.flaticon.com/512/5704/5704978.png" alt="" className={styles.img_logo}/>
           <h2 className={styles.company_name}>workzilla</h2>
            </div>
          
           <div>
           <a href="#" className={styles.register}>Войти</a> 
           <span>или</span>
           <a href="#" className={styles.register}>Зарегистрироваться</a>
           <button className={styles.btn}>Дать задание</button>
           </div>
          
        </div>
    );
};

export default Header;