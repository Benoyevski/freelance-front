import React from 'react';
import Headerlk from '../../components/HeaderLK/Headerlk'
import Task from '../../components/Task/Task';
import SideNavBar from '../../components/SideNavBar/SideNavBar'

const TasksPage = () => {
    return (
        <>
            <Headerlk/>
            <SideNavBar />
            <Task/>
        </>
    );
};

export default TasksPage;