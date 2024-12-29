import React from 'react';
import Header from '../other/Header';

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10'>
      <Header></Header>

<div>
  <form className='items-center'>
    <div><h3>Task Title</h3></div>
    <input type="text" placeholder='Make Ui'/>
    <div><h3>Description</h3>
    <textarea></textarea></div>
   <div className='text-color-300'> <h3>Date</h3>
   <input type="date" /></div>
<div><h3>Asign to</h3>
<input type="text" placeholder='Employee Name' /></div>
<div><h3>Category</h3>
<input type="text" placeholder='design,dev, etc' /></div>
  </form>
</div>
<button>Create Task</button>
    </div>
  );
}

export default AdminDashboard;
