"use client"
import React,{useState,useEffect} from 'react'
import { sql } from '@vercel/postgres';
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {putNewItem,getAllItems,deleteItem,updateItem} from "@/services/todo/index"
import Model from '@/components/model';
const Home =() => { 
  const [model,setmodel]=useState(false)
  const [result,setresult] = useState([])
  const [data,setdata]=useState('')
  const [check,setcheck]=useState(false)
  const [edit,setedit]=useState({name:"",status:false})
  const [editdata,seteditdata]=useState({name:"",status:false})
   useEffect(()=>{
    if(data.length>0){
     setcheck(true)
    }
    else{
      setcheck(false)
    }
  },[data])
  useEffect(()=>{
    alldata()
  },[])

  async function alldata(){
   const response=await getAllItems();
    setresult(response.data)
    console.log("DATA IN FUNCTION",response.data)
  }
  function HandleModelShow(e){
        setmodel(!model);
  }
 
  function onChange(e){
    setdata(e.target.value)
  }
  async function onAdd(){
    const result=await putNewItem(data)
    console.log(result)
    if(result.sucess){
      setdata('')
      setcheck(false)
      alldata()
    }
  }
  async function HandelEdit(props){
    console.log(editdata.name,props)
    const data={editdata,edit};
    const response =await updateItem(data)
    console.log("response",response)
      alldata()
  }
  async function HandleDelete(item){
       const response= await deleteItem(item)  
       console.log(response)
       if(response.sucess){
        alldata()
       }
  }
  return (
    <div className='bg-white lg:p-20 text-black min-h-screen'>
    {model && <Model HandleModelShow={HandleModelShow} edit={edit} setedit={setedit} HandleEdit={HandelEdit}  />}
      <div className='flex justify-center items-center max-w-xl flex-col'>
       <div className='flex justify-between marker:items-center'>
        <input 
           type='text'
           placeholder='Enter Your Task'
           className='focus:outline-none  placeholder:text-gray-400 placeholder:text-sm text-lg p-2  shadow-xl w'
           value={data}
           onChange={(e)=>onChange(e)}
        />
        <button 
        className={`ml-5 cursor-pointer  px-2 py-2 bg-black/30 hover:rounded-full transition-all duration-200 border-2 ${check?"-translate-x-0":"-translate-x-10"}`}
        disabled={!check}
        onClick={()=>onAdd()}>         
        <IoMdAdd className={`text-2xl text-white`}/>
        </button>  
       </div>
        <div className='mt-5 w-full p-10 -z-1'>
        { result && result.length && result.map((item,index)=>{
          return(
            <div 
             key={index}
            className={`flex justify-between relative items-center gap-10 space-y-6 shadow-lg p-2`}
           >
           <div className={`absolute  bottom-[30%] left-0 right-0 w-full h-0.5 ${item.status?"bg-black/10":"hidden"}`}></div>
            <h1 className='text-xl'>{item.name}</h1>
            <div className='flex justify-items-center gap-2 text-xl'>
            <MdDelete className=' text-gray-400 -z-1 text-2xl cursor-pointer  hover:text-red-500'
              onClick={()=>HandleDelete(item)}
            />
            <FaEdit   className=' text-gray-400 -z-1 text-2xl cursor-pointer hover:text-green-500'
              onClick={()=>{
              setedit(item)
              seteditdata(item)
              setmodel(!model)}}
            />
            </div>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default Home