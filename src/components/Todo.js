import axios from 'axios'
import React from 'react'


function TodoItem(props) {
    const deleteTodoHandler = async (nanoid) => {
    await axios.delete(`http://localhost:8000/api/delete-todo/${nanoid}`).then(res => console.log(res.data))
    };

    return (
        <div align={'left'}>
                <span style={{ fontWeight: 'bold, underline',}}>{props.todo.title} : {props.todo.description}</span>
                <button onClick={() => deleteTodoHandler(props.todo.nanoid)} className="btn btn-outline-danger my-2 mx-0 float-end" style={{borderRadius:'50px'}} >delete</button>
                <button onClick={() => deleteTodoHandler(props.todo.nanoid)} className="btn btn-outline-warning my-2 mx-2 float-end" style={{borderRadius:'50px'}} >update</button>
            <hr/>
        </div>
    );
}

export default TodoItem;