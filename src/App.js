import './App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import TodoView from "./components/TodoListView";
import {nanoid} from "nanoid";
import {Button, Form} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";

function App() {

    const [todoList, setTodoList] = useState([{}])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")


    useEffect(() => {
        axios.get(`https://crud-rk.herokuapp.com/api/get-todo`)
            .then(res => {
                setTodoList(res.data)
            })
    });

    const addTodoHandler = () => {
      axios.post(`https://crud-rk.herokuapp.com/api/add-todo/`,
          {'nanoid': nanoid(), 'title': title, 'description': desc, 'addedDT': Date(), 'updatedDT': Date()})
          .then(res => console.log(res))
    };

  return (
        <div id="main" className="App  justify-content-center align-content-center mx-auto my-auto"
             style={{"width": "360px", "backgroundColor":"white", "margintop": "15px"}}>

            <div className="card-body list-group-item">
                <h5 className="card text-white bg-dark mb-4" style={{'font-family': 'Palatino Linotype', 'font-weight': 'bold'}}>
                    Add Your Task
                </h5>
                <Form align={'left'}>
                    <Form.Group className={"mb-3"} controlId={'title'} >
                        <Form.Label>Title</Form.Label>
                        <Form.Control required type={'text'} onChange={event => setTitle(event.target.value)}/>
                        <Form.Control.Feedback type={'invalid'} >Title can not be empty</Form.Control.Feedback>
                        <Form.Text className={'mb-1 text-muted'} style={{'font-family': 'Garamond'}}>*Title can not be empty</Form.Text><br/>
                    </Form.Group >
                    <Form.Group className={"mb-4"} controlId={'desc'}>
                    <Form.Label>Description</Form.Label>
                        <Form.Control as={'textarea'} rows={4} onChange={event => setDesc(event.target.value)}/>
                        </Form.Group>

                </Form>
                    <Button className={" mx-2 mb-5"} variant={'success'}

                            style={{borderRadius: '50px',}} onClick={addTodoHandler}
                    disabled={(title.trim()==="")}
                    >
                        Add <FaPlus style={{'padding-bottom':'3.5px'}}/>
                    </Button>
                <h5 className={"card text-white bg-dark mb-3"} style={{'font-family': 'Palatino Linotype', 'font-weight': 'bold'}}>Your Tasks</h5>
                <div className={'justify-content-start align-content-start'}>
                    <TodoView todoList = {todoList} />
                </div>
            </div>

        </div>
  );
}

export default App;
