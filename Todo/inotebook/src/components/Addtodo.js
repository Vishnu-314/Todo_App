import React, { useContext, useState } from 'react'
import todoContext from '../context/todos/todoContext';

const Addtodo = () => {
    const context=useContext(todoContext);
  const {addTodo}=context;
  const [todo,setTodo]=useState({title:"",description:"",tag:"default"})
  const handleClick=(e)=>{
    e.preventDefault();
    addTodo(todo.title,todo.description,todo.tag);
        setTodo({title:"",description:"",tag:""})
  }
  const onChange=(e)=>{
    setTodo({...todo,[e.target.name]:e.target.value})
  }
    return (
        <div>
            <div className="container my-3">
                <h2>Add a Todo</h2>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={todo.title} className="form-control" id="title"  name="title"aria-describedby="emailHelp" onChange={onChange} minLength={5} placeholder="Title length should be min 5 chars" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" value={todo.description} name='description' onChange={onChange} minLength={5} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" value={todo.tag} className="form-control" id="tag" name='tag' onChange={onChange}/>
                    </div>
                    <button disabled={todo.title.length<5 || todo.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default Addtodo
