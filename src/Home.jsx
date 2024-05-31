import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from './redux/slice/todoSlice'
import { nanoid } from 'nanoid';
import { Form, Table } from 'react-bootstrap';



const Home = () => {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({ id: nanoid(), title, completed: false }));
      setTitle('');
    }
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggleComplete = (todoId) => {
    dispatch(toggleComplete(todoId));
  };

  return (
    <div style={{height:'100vh',backgroundColor:'black'}} className='w-100 ' >
     <div style={{height:'90px'}} className=' w-100  d-flex align-items-center justify-content-center '>
     <h1 style={{textAlign:'center',color:'black'}}>
       Todo List
      </h1>
      
     </div>
       

     
      <div className='d-flex align-items-center justify-content-center mt-5 '>
      <Form.Control
      className='w-50'
        type="text"
        placeholder="Add a new todo"
        aria-describedby="passwordHelpBlock"
        value={title}

        onChange={(e) => setTitle(e.target.value)}
      />
        
        <button onClick={handleAddTodo} type="button" className="btn btn-danger ms-5">ADD</button>
        {/* <button onClick={handleAddTodo}>Add Todo</button> */}
      </div>
      <div  className='d-flex align-items-center justify-content-center mt-5 w-100 '>
      {/* <table>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
              </td>
              <td>{todo.title}</td>
              <td>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}


    <Table striped bordered hover  className='w-50'>
      <thead >
        <tr >
          <th>Completed</th>
          <th>List</th>
          <th>***</th>
        </tr>
      </thead>
      <tbody>
      {todos.map((todo) => (
            <tr key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
              </td>
              <td>{todo.title}</td>
              <td>
                <button className='ms-5' style={{backgroundColor:'#355E3B',padding:'10px',borderRadius:'10px',color:'white',border:'solid white'}} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}

      </tbody>
      </Table>

      </div>
      
    </div>
  );
};

export default Home;
