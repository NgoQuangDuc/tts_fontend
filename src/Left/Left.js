import React from 'react'
import './Left.scss'
import { useState } from 'react'

const Left = (props) => {
  function TaoSoNgauNhien(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
  const{task,setTask}=props;
 const[inp,setInp]=useState({
  id:TaoSoNgauNhien(1,1000),
  task:"",
  description:"", 
 date:"",  
 piority:"",
boolean:false,
bool:true
 })
const handAdd=()=>{
setTask([...task,inp])
setInp({
  id:TaoSoNgauNhien(1,1000),
  task:"",
  description:"", 
 date:"",  
 piority:"",
 boolean:false,
 bool:true
 })
}
console.log(task)
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div className="title">New Task</div>
    <input type="text" value={inp.task} onChange={(e)=>setInp({...inp,task:e.target.value})}  className="inp-1" placeholder="Add new task..." />
    <div style={{marginTop:"24px"}}>
        <div style={{fontWeight: 'bold',fontSize: '12px',marginRight:"1169px"}}>Description</div>
        <input className="inp-2" value={inp.description} onChange={(e)=>setInp({...inp,description:e.target.value})} type="text" />
    </div>
    <div className="all3">
    <div>
        <div style={{width:'80px',fontWeight: 'bold',fontSize: '12px',marginRight:"120px"}}>Due Date</div>
        <span><input value={inp.date} onChange={(e)=>setInp({...inp,date:e.target.value})} className="inp-3" type="text" placeholder=""/><div></div></span>

    </div>
<div>
    <div style={{fontWeight: 'bold',fontSize: '12px',marginRight:"100px"}}>Piority</div>
    <div><select  value={inp.piority}  className="inp-4" onChange={(e)=>setInp({...inp,piority:e.target.value})} >
 
  <option className="inp-41" value="Normal">Normal</option>
  <option className="inp-41" value="Low">Low</option>
  <option className="inp-41" value="High">High</option>
</select></div>
</div>
  

    </div>
    <button className="btn-1" onClick={()=>handAdd()}>Add</button>
    </div>
  )
}

export default Left