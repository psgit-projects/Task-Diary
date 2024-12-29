import React from 'react';
import Header from '../other/Header';
import TaskListNumber from '../other/TaskListNumber';
import TaskList from '../TaskList/TaskList';

function EmployeeDashboard() {
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
      <Header></Header>
      <TaskListNumber></TaskListNumber>
      <TaskList></TaskList>
    </div>
  );
}

export default EmployeeDashboard;
