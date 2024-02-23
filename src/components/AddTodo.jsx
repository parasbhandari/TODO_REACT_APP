import {useState} from "react";
import { MdAddCircle } from "react-icons/md";
export default function AddTodo(props){
  const [todoName,setTodoName]= useState("");
  const [todoDate,setTodoDate]= useState("");
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
     setTodoDate(event.target.value);
  }
  const handleAddButtonClicked=()=>{
    props.onNewItem(todoName,todoDate);
    setTodoName("");
    setTodoDate("");
  }
return <div className="row kg-row">
<div className="col-6">
  <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/>
</div>
<div className="col-4">
  <input type="date" onChange={handleDateChange} value={todoDate}/>
</div>
<div className="col-2">
<button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>{<MdAddCircle></MdAddCircle>}</button>
</div>

</div>
};