"use client"
import React,{useEffect} from 'react'
import { MdCancel } from "react-icons/md";
const Model = ({HandleModelShow,edit,setedit,HandleEdit}) => {
  const item=edit
  return (
    <div className='fixed z-20 top-0 right-0 left-0 bottom-0 w-full h-full backdrop-blur-sm bg-black/35 flex justify-center items-center'>
    <div className='text-black  bg-white shadow-xl  p-5 flex flex-col gap-3 relative'>
    <h1>Edit item</h1>
    <MdCancel 
     onClick={()=>HandleModelShow("majid")}
    className='absolute -right-2 -top-2 text-3xl hover:rotate-180 duration-300 delay-100 cursor-pointer' 
    />
    <input 
    type='text' 
    className='text-black block placeholder:text-gray-400 px-4 p-2 focus:outline-none shadow-xl'
    value={edit.name}
    onChange={(e)=>setedit({...edit,name:e.target.value})}
    />
    <div className='flex justify-between px-2'>
    <label className={`${edit.status?"text-green-900":"text-gray-400"}`}>Completed</label>
    <input 
    type='checkbox' 
    className='text-black  placeholder:text-gray-400 px-4 p-2 focus:outline-none shadow-xl'
    value={edit.status}
    onChange={(e)=>setedit({...edit,status:e.target.checked})}
    />
    </div>
     <button className='w-full p-2 bg-green-300 group transition duration-300'
     onClick={()=>HandleEdit(item,edit)}
     >Save</button>
    </div>
    </div>
  )
}

export default Model