import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import TodoView from "./components/TodoListView";
import {nanoid} from "nanoid";

function App() {

    const [todoList, setTodoList] = useState([{}])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")



    useEffect(() => {
        axios.get(`http://localhost:8000/api/get-todo`)
            .then(res => {
                setTodoList(res.data)
            })
    });

    const addTodoHandler = () => {
      axios.post(`http://localhost:8000/api/add-todo/`, {'nanoid': nanoid(), 'title': title, 'description': desc}).then(res => console.log(res))
    };

  return (
        <div id="main" className="App  justify-content-center align-content-center mx-auto my-auto" style={{"width": "400px", "backgroundColor":"currenColor", "margintop": "15px"}}>
            <br/>
            <h1 className="card-header text-white bg-primary mb-4">
                Task Manager
            </h1>
            <div className="card-body list-group-item">
                <h5 className="card text-white bg-dark mb-3">
                    Add Your Task
                </h5>
                <form>
                    <div className={"form-group"} id={'form'} align={'left'}>
                        <label htmlFor={'title'}>Title</label>
                        <input id={"title"} className={'form-control'} onChange={event => setTitle(event.target.value)}/>
                        <label className={'mb-3 form-text form-label text-muted'}>*Title can not be empty</label><br/>
                        <label htmlFor={'desc'} >Description</label>
                        <textarea id={"desc"} className={'mb-3 form-control'} rows={"4"} onChange={event => setDesc(event.target.value)}/>
                    </div>
                </form>
                    <button className={"btn btn-outline-primary mx-2 mb-4"} style={{"borderRadius": '50px', 'front-weight':'bold'}} onClick={addTodoHandler}>
                        Add Task
                    </button>
                <h5 className={"card text-white bg-dark mb-3"}>Your Tasks</h5>
                <div className={'justify-content-start align-content-start'}>
                    <TodoView todoList = {todoList} />
                </div>
            </div>

        </div>
  );
}

export default App;
