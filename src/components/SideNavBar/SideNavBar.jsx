import React, { useState } from 'react';
import styles from "./sidenavbar.module.css"
import cn from 'classnames'



const SideNavBar = () => {

    const [isExpendend, setIsExpendend] = useState(false)


    const handleClick = () => {
        setIsExpendend(!isExpendend)
    }

    return (
        <div className={isExpendend ? styles.sidebar_container :  styles.sidebar_container_NX}>
            <div className={styles.nav_upper}>
                <div className={styles.nav_heading}>
                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5704/5704978.png" alt="" className={styles.img_logo}/>
                        <h2>workzilla</h2>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2789/2789148.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Автотематика</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7125/7125054.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Маркетинг</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/2205/2205924.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Дизайн</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/6611/6611826.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Разработка</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/7627/7627118.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Менеджмент</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/5731/5731819.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Контент</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/4501/4501445.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Аналитика</a>
                    </div>

                    <div className={styles.nav_brand}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1477/1477059.png" alt="" className={styles.img}/>
                        <a href="#" className={isExpendend ? styles.link_text : styles.text}>Другое</a>
                    </div>
                    <button className={isExpendend ?  cn(styles.burger, styles.burger_out) :  cn(styles.burger, styles.burger1, styles.burger_in)}
                    onClick={handleClick}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
           
        </div>
    );
};

export default SideNavBar;