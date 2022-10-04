import { useState } from "react";
export default function Todo({ item, onUpdate }) {
  const [isEdit, setIsEdit] = useState(false);
  function FormEdit(){
    const[newValue, setNewValue] = useState(item.title);
    function handleSubmit(e){
        e.preventDefaulr();
    }

    function handleChange(e){
        const value= e.target.value;
        setNewValue(value);
    }

    function handleClickUpdateTodo(){
        onUpdate(item.id, newValue);
        setIsEdit(false);
    }
    return (
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input type="text" className="todoInput" onChange={handleChange} value={newValue} />
        <button className="button" onClick={handleClickUpdateTodo}>Update</button>
    </form>
    );
  }
  function TodoElement(){
    return <div className='todoInfo'>
    {item.title}
    <button onClick={() => setIsEdit(true)}>Edit</button>
    <button>Delete</button>
  </div>
  }
  return (
    <div className="todo">
      {isEdit ? <FormEdit/> : <TodoElement /> }</div>
    
  );
}
