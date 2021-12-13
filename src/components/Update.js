import '../App.css';
import React, {useState, useEffect} from "react";
import axios from "axios";
import {Button, Form} from "react-bootstrap";
import {FaPlus} from "react-icons/fa";
import {useParams, useNavigate} from "react-router-dom";
import {nanoid} from "nanoid";

function Update() {

    const [todo, setTodo] = useState({})
    let nid = useParams().nanoid;
    const fetchdata = async () => {
        const res = await axios.get(`https://crud-rk.herokuapp.com/api/get-todo/${nid}`);
        setTodo(res.data);
    };
    useEffect(() => {
        fetchdata();
    }, [])

    let [title, setTitle] = useState("ojef-=-39uaenflenfaw?:{/")
    let [desc, setDesc] = useState("q309pjdAA()&#:woau!@")
    let a = "ojef-=-39uaenflenfaw?:{/";
    let b = "q309pjdAA()&#:woau!@";
    const nav = useNavigate();

    const updateTodoHandler = async (id) => {
        if (title === "ojef-=-39uaenflenfaw?:{/") {
            title = todo.title
        }
        if (desc === "q309pjdAA()&#:woau!@") {
            desc = todo.description
        }


        await axios.put(`https://crud-rk.herokuapp.com/api/update-todo/${id}`,

            {
                'nanoid': nanoid(), 'title': title, 'description': desc, 'updatedDT': Date()
            })
        await axios.put(`https://crud-rk.herokuapp.com/api/update-todo/${id}`,

            {
                'nanoid': nanoid(), 'title': title, 'description': desc, 'updatedDT': Date()
            })


    };



    return (
        <div id="main" className="App  justify-content-center align-content-center mx-auto my-auto"
             style={{"width": "480px",'max-width':"100%", "backgroundColor": "white", "margintop": "15px"}}>
            <div className="card-body list-group-item">
                <h5 className="card text-white bg-dark mb-4"
                    style={{'font-family': 'Palatino Linotype', 'font-weight': 'bold'}}>
                    Update Your Task
                </h5>
                <Form >
                     <Form.Group className={"mb-3"} controlId={'title'} align={'left'}>
                        <Form.Label>Title</Form.Label>
                        <Form.Control required type={'text'} onChange={event => setTitle(event.target.value)}
                                      defaultValue={todo.title}
                        />
                        <Form.Control.Feedback type={'invalid'}>Title can not be empty</Form.Control.Feedback>
                        <Form.Text className={'mb-1 text-muted'} style={{'font-family': 'Garamond'}}>*Title can not be
                            empty</Form.Text><br/>
                    </Form.Group>
                    <Form.Group className={"mb-4"} controlId={'desc'} align={'left'} >
                        <Form.Label>Description</Form.Label>
                        <Form.Control as={'textarea'} rows={4}
                                      onChange={event => setDesc(event.target.value)}
                                      defaultValue={todo.description}

                        />
                    </Form.Group>


                <Button onClick={() => {
                    updateTodoHandler(nid);
                    nav('/crud-frontend');
                }}

                        type={'submit'}  className={" mx-2 mb-5"} variant={'success'}
                                       style={{borderRadius: '50px', }}

                                       disabled={((title=== a ) && (desc === b)) || (title.trim() === "")}

                >

                    Update <FaPlus style={{'padding-bottom': '3.5px'}}/>
                </Button>
        </Form>
            </div>

        </div>
    );

}

export default Update;
