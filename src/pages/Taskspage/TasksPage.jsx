import React from 'react';
import Headerlk from '../../components/HeaderLK/Headerlk'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const TasksPage = () => {

    const orders = useSelector((state)=> state.order.orders)
    return (
        <>
            <Headerlk/>
            <div>
                    <div><h2>Задания</h2></div>
                    
            </div>
        </>
    );
};

export default TasksPage;