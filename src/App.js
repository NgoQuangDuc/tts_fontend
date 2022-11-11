import Left from './Left/Left';
import './App.css';
import Right from './Right/Right';
import {useState} from 'react'
function App() {
  const[task,setTask]=useState([])
  console.log(task)
  return (
    <div style={{display: 'flex'}}>
     <div style={{width:"45%",marginLeft:"40px",border:"1px solid black",paddingLeft:"50px"}}><Left setTask={setTask} task={task} /></div> 
     <div style={{width:"45%",marginRight:"40px",border:"1px solid black",paddingLeft:"50px"}}> <Right task={task} setTask={setTask} /></div>
    </div>
  );
}

export default App;
