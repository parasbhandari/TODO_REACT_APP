function TodoItem(props){
  let {todoName}=props;
  let {todoDate}=props;

  return (
    <div className="container">
    <div className="row kg-row">
    <div className="col-6">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
    <button type="button" class="btn btn-danger kg-button" onClick={()=>props.onDeleteClick(todoName)}>Delete</button>
    </div>
    </div>
    </div>
  );
};
export default TodoItem;