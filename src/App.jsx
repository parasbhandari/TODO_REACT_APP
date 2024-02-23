import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import {useState} from "react";
function App(){
  const initialTodoItems=[];

const [todoItems,setTodoItems] = useState(initialTodoItems);
const handleNewItem=(itemName, itemDueDate)=>{
  const newItem=[...todoItems,{
    name:itemName,
    date:itemDueDate
  }];
  setTodoItems(newItem);

}
const handleDeleteItem=(todoItemName)=>{
 const newTodoItems= todoItems.filter(todoitem=> todoitem.name!==todoItemName)
  
 setTodoItems(newTodoItems);
}
  return <>
  <center>
    <AppName></AppName>
    <AddTodo onNewItem={handleNewItem}></AddTodo>
   {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
   <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  </>
}
export default App;