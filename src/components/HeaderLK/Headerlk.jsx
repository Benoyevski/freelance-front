import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from "react";

import logo from "./logo.png";
const Headerlk = () => {
  const arr = ["Исполнитель", "Заказчик"]
  const [active, setActive] = useState(Number(localStorage.getItem("role")));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onclickCategory = (index) => {
    localStorage.setItem("role",index)
    setActive(index);
  };
  return (
    <div className={styles.header_bg}>
      <div className={styles.headerLk_container}>
        <div className={styles.nav}>
          <div className={styles.logo}>
            <Link to="/"><img src={logo} alt="" /></Link>
          </div>
          <div className={styles.nav_link}>
          <div className={styles.nav_link_item}>
              <div className={styles.header_icons}>
                <ion-icon name="checkbox-outline"></ion-icon>
              </div>
              <div>
                <Link to="/orders">Задание</Link>
              </div>
            </div>
            <div className={styles.nav_link_item}>
              <div className={styles.header_icons}>
              <ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon>
              </div>
              <div>
              <Link to="/works">о нас</Link>
              </div>
            </div>
            <div className={styles.nav_link_item}>
              <div className={styles.header_icons}>
              <ion-icon name="people-outline"></ion-icon>
              </div>
              <div>
                <Link to="/works">Контакты</Link>
              </div>
            </div>
          </div>
          <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          
           { arr.map((item,index)=>{

            return <div key= {index}  onClick={() => onclickCategory(index)} className={index === active ? styles.lk_select_item_select : styles.lk_select_item}>{item}</div>
            
           })}
         
        </MenuItem>
        <Divider />
      
       
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
          <div className={styles.nav_btn}>
            <div className={styles.nav_btn_icon}>
              <ion-icon name="notifications-outline"></ion-icon>
            </div>
            <div>
              <h4>300</h4>
            </div>
            <div>
              <Link to = "/tasks"><button>Дать Задание</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headerlk;
