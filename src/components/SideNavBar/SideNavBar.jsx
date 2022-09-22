import React, { useEffect, useState } from 'react';
import styles from "./sidenavbar.module.css"
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../features/categoryesSlice';



const SideNavBar = () => {





    const dispatch = useDispatch()

    const category = useSelector(state => state.category.category)

    console.log(category);


    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])



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
                        <div className={styles.nav_menu}>
                            {category.map(el => {
                                return (
                                 <a href="" title={el.category} className={isExpendend ?  styles.menu_item : styles.menu_item_NX}>
                                    <img src={el.src} alt="" className={styles.img}/>
                                    {isExpendend && <p>{el.category}</p> }
                                    {!isExpendend  && <div className={styles.tooltip}>{el.category}</div>}
                                 </a>
                                )
                            })}
                        </div>
                    {/* {category.map(el => {
                        return (
                             
                                <img src={el.src} alt="kdk" className={styles.img}/>
                                <span  className={isExpendend ? styles.link_text : styles.text}>{el.category}</span>
                           
                           
                        )
                       })} */}


                   

                    
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