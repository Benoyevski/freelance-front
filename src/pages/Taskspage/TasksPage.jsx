import React from 'react';
import Headerlk from '../../components/HeaderLK/Headerlk'
import Task from '../../components/Task/Task';

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