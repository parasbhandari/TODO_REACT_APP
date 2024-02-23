import { RiDeleteBin4Line } from "react-icons/ri";
function TodoItem(props){
  let {todoName}=props;
  let {todoDate}=props;

  return (
    <>
    <div className="container">
    <div className="row kg-row">
    <div className="col-6">
      {todoName}
    </div>
    <div className="col-4">
      {todoDate}
    </div>
    <div className="col-2">
    <button type="button" className="btn btn-danger kg-button" onClick={()=>props.onDeleteClick(todoName)}>{<RiDeleteBin4Line></RiDeleteBin4Line>}</button>
    </div>
    </div>
    </div>
    </>
  );
};
export default TodoItem;