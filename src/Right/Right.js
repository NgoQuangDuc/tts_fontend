import React from 'react'
import {useState,useEffect} from 'react'
import _ from 'lodash'
import './Right.scss'
const Right = (props) => {


  const[finds,setFinds]=useState("")

 
  const{task,setTask}=props;
  const handSelect=(id,e)=>{
    let c=_.cloneDeep(task);
    c[id]['piority']=e.target.value
    setTask(c)

  }
 const handDetail=(index)=>{

let c=_.cloneDeep(task);
c[index].boolean=!c[index].boolean;
setTask(c)
 

 }
 const Removeall=()=>{
  const a=task.filter((ex)=>ex.bool===false);
setTask(a)
 }
 const handDelete=(id2)=>{
const a=task.filter((ex)=>ex.id!==id2)
setTask(a)
 }
 const handCheck=(index)=>{
  let c=_.cloneDeep(task);

  c[index].bool=!c[index].bool;
  setTask(c)
 }

const handSearch=(e)=>{
  setFinds(e.target.value)
 let r=task.filter(h=>h.task.includes(e.target.value))
setTask(r)
if(_.isEmpty(r)){
  alert("NO FIND!!")
}
}
const handChanges=(id,values,e)=>{
  let r=_.cloneDeep(task)
  r[id][values]=e.target.value
  setTask(r)
}
const handClick=(id)=>{
  alert("Successed Update!!!")
  let r=_.cloneDeep(task)
r[id]['boolean']=false
setTask(r)
}

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div className="title" style={{textAlign: 'center'}}>To Do List</div>
    <input type="text" value={finds} onChange={(e)=>handSearch(e)}  className="inp-1" placeholder="Search..." />
    {
      task.map((dd,index)=>{
       
        return(
          <div key={index} className="detail">
            <span style={{paddingLeft:'30px',borderBottom:'1px solid black',    paddingBottom: '36px',marginTop: '50px'}}>
              <input type="checkbox" onChange={()=>handCheck(index)} checked={dd.bool} /><span>{dd.task}</span>
    <button style={{marginLeft:'330px',color:"white",backgroundColor:'red',    border:' none',padding: '6px 10px',
    borderRadius: '7px'}} onClick={()=>handDetail(index)}>Detail</button>
    <button style={{color:"white",backgroundColor:'blue',  border:' none',padding: '6px 10px',
    borderRadius: '7px',marginLeft: '10px'}} onClick={()=>handDelete(dd.id)}>Remove</button>
    </span>
{dd.boolean&&
   <div style={{marginLeft:'40px'}}>
    <input type="text"  className="inp-1" placeholder="Do homework..." value={dd.task} onChange={(e)=>handChanges(index,'task',e)}/>
    <div style={{marginTop:"24px"}}>
        <div style={{fontWeight: 'bold',fontSize: '12px',marginRight:"1169px"}}>Description</div>
        <input className="inp-2" type="text" onChange={(e)=>handChanges(index,'description',e)} placeholder="Lorem Ipsum..." value={dd.description} />
    </div>   <div className="all3">
    <div>
        <div style={{width:'80px',fontWeight: 'bold',fontSize: '12px',marginRight:"120px"}}>Due Date</div>
        <span><input onChange={(e)=>handChanges(index,'date',e)}  value={dd.date} className="inp-3" type="text" placeholder=""/><div></div></span>

    </div>
<div>
    <div  style={{fontWeight: 'bold',fontSize: '12px',marginRight:"100px"}}>Piority</div>
    <div><select onChange={(e)=>handSelect(index,e)}  name="audi" value={dd.piority} className="inp-4" >
 
    <option className="inp-41" value="Normal">Normal</option>
  <option className="inp-41" value="Low">Low</option>
  <option className="inp-41" value="High">High</option>
</select></div>
</div>
  

    </div>
    <button className="btn-1" onClick={()=>handClick(index)}>Update</button>

   </div>
   } 
          </div>
        )
      })
    }



   
   <div style={{marginTop:'180px',backgroundColor:'gray',position: 'relative',padding: '20px',
    right: '50px',
    width: '700px'}}>
    <span>Bulk</span>
    <span>
      <button onClick>Done</button>
      <button onClick={Removeall}>Remove</button>
    </span>
    </div> 
  </div>
  )
}

export default Right