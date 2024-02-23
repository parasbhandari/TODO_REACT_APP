import TodoItem from "./TodoItem";
function TodoItems(props){
  let {todoItems}=props;
  return(
    <div className="items-container">
   { todoItems.map(item=> <TodoItem  key={item.name} todoName={item.name} todoDate={item.date} onDeleteClick={props.onDeleteClick}></TodoItem>)}
   </div>
  
  )
}
export default TodoItems;