"use client";
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState('');
  const [des, setDes] = useState('');
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, {title, des}]);
    setTitle('');
    setDes('');
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i,1);
    setmainTask(copyTask)
  }

  let renderTask = <h2>No Task available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return(
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flec items-center w-2/3'>
            <h6 className='text-2xl font-semibold'>{t.title}</h6>
            <p className='text-lg font-medium'>{t.des}</p>
            <button 
              onClick={() => {
                deleteHandler(i)
              }}
              className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
              Delete</button>
          </div>
        </li>
      ) 
    })
  }

  return (
    <>
      <h2 className='bg-black text-white p-5 text-5xl text-center text-bold'>
        My TodoList</h2>
      <form onSubmit={submitHandler}>
        <input type='text' 
                placeholder='Enter Title here' 
                className='text-2xl border-zinc-800 m-5 px-4 py-2 border-2'
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                /> 
          <input type='text' 
                placeholder='Enter Description here' 
                className='text-2xl border-zinc-800 m-5 px-4 py-2 border-2'
                value={des}
                onChange={(e) => {
                  setDes(e.target.value);
                }}
                /> 
                <button className='bg-black text-white px-4 py-3 text-xl m-5 font-bold rounded'>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-200'>  
                <ul>
                  {renderTask}
                </ul>
      </div>
    </>
  )
}

export default page

