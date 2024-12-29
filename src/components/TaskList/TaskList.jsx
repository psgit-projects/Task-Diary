import React from 'react';

function TaskList() {
  return (
    <div id='tasklist' className='overflow-x-auto mt-10 h-[54%] flex items-center flex-nowrap justify-start gap-5 w-full py-5'>
       <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Push Project On Github</h2>
       <p className='text-sm text-weight-30 mt-2 '>
        
Today, I worked on Git by creating a new branch, making changes, committing them with clear messages, and pushing the branch to the remote repository. I then created a pull request for the team to review and merge the changes.
       </p>
       </div>
       <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Food Project Complete</h2>
       <p className='text-sm mt-2'>
       I completed the project by developing key features, resolving bugs, optimizing performance, testing functionality, and documenting the workflow. This ensured a polished final product ready for deployment.
       </p>
       </div>
       
       <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Make a youtube video</h2>
       <p className='text-sm mt-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis veritatis, voluptatibus est rem perferendis? Modi nulla molestias facere soluta fugiat, rem reprehenderit nihil deserunt exercitationem quibusdam est placeat illo.
       </p>
       </div>

       <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4>20 feb 2024</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Youtube clone project done</h2>
       <p className='text-sm mt-2'>
       I completed the project by developing key features, resolving bugs, optimizing performance, testing functionality, and documenting the workflow. This ensured a polished final product ready for deploy.</p>
       </div>
      
    </div>
  );
}

export default TaskList;
