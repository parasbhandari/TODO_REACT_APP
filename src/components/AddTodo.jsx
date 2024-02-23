import {useState} from "react";
export default function AddTodo(props){
  const [todoName,setTodoName]= useState();
  const [todoDate,setTodoDate]= useState();
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
return <div class="row kg-row">
<div class="col-6">
  <input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/>
</div>
<div class="col-4">
  <input type="date" onChange={handleDateChange} value={todoDate}/>
</div>
<div class="col-2">
<button type="button" class="btn btn-success kg-button" onClick={handleAddButtonClicked}>Add</button>
</div>

</div>
};