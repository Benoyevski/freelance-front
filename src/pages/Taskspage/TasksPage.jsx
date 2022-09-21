import React from 'react';
import Headerlk from '../../components/HeaderLK/Headerlk'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Task from '../../components/Task/Task';
import SideNavBar from '../../components/SideNavBar/SideNavBar'


const TasksPage = () => {

    const orders = useSelector((state)=> state.order.orders)
    return (
        <>
            <Headerlk/>
            <SideNavBar />
            <Task/>

        </>
    );
};

export default TasksPage;