import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
const AddItem=({addTask})=>
{
  const [value,updateValue]=useState('');

  const onSubmit=(e)=>{
    e.preventDefault();
    if(value!=="")
    {
      addTask(value);
      updateValue("");
    }
  };
return(
  <div className="head">
    <form onClick={onSubmit} id="forms">
      <input type="text" placeholder="Enter text" value={value} onChange={e=>updateValue(e.target.value)}/>
        <button type="submit">Add</button>
        
    </form>
  </div>

)
}
const TodoList=()=>{
  const addTask=text=>updateTask([...task,{text}]);
const [task,updateTask]=useState([
  {
    text:'',
  }
]);


const removeTask = (index) =>
{
  const newTask=[...task];
  newTask.splice(index,1);
  updateTask(newTask);
}
return(
  <div>
    <AddItem addTask={addTask}/>
    {task.map((list,index)=>(
      <div className="list">
        {list.text}
        <button className="btn"  onClick={()=>removeTask(index)}>Delete</button>
        <button className="btn" /*onClick={()=>editTask(index)}*/>Edit</button>
        </div>
    ))}
  </div>
);
}
ReactDOM.render(<TodoList />,document.getElementById('root'));
reportWebVitals();
