import axios from 'axios'
import React, {useState} from 'react'
import {Button, ButtonGroup, Collapse, Dropdown} from "react-bootstrap";
import {FaTrash, FaEye, FaPencilAlt} from "react-icons/fa";

function TodoItem(props) {
    const deleteTodoHandler = async (nanoid) => {
    await axios.delete(`https://crud-rk.herokuapp.com/api/delete-todo/${nanoid}`).then(res => console.log(res.data))
    };
    const [open, setOpen] = useState(false);

    return (
        <div align={'right'} style={{'font-family':'Segoe UI'}}>
                <span className={'text-break'}
                      style={{'padding-top':'6px','font-family': 'lato', 'font-size':'17px', 'word-wrap':'break-word', 'float':'left'}}>
                    {props.todo.title}
                </span>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mx-2" variant={'outline-info'} style={{borderRadius:'100px'}}
        hidden={!props.todo.title}
      >
        <FaEye style={{'padding-bottom':'3px'}}/>
      </Button>


            <Dropdown as={ButtonGroup} className="mx-1" hidden={!props.todo.title}>

                <Dropdown.Toggle variant={'outline-primary'}/>
                <Dropdown.Menu align={'end'} >
                    <div align={'right'}>
                    <Dropdown.Item href={`/crud-frontend/${props.todo.nanoid}`}>
                    <span style={{'float':'left'}}>Update</span> <FaPencilAlt style={{'padding-bottom':'3px'}} className={'link-warning'}/></Dropdown.Item>

                    <Dropdown.Item onClick={() => deleteTodoHandler(props.todo.nanoid)} style={{"align":"right"}}>
                        <span style={{'float':'left'}}>Delete</span>
                    <FaTrash style={{'padding-bottom':'3px'}}  className={'link-danger'}/>
                    </Dropdown.Item>
                            </div>


                </Dropdown.Menu>
            </Dropdown>

      <Collapse in={open}>

        <div id="example-collapse-text" className="card-body " style={{'word-wrap':'break-word'}} align={'left'}>
            <span style={{'font-weight': 'bold', 'font-size':'16px'}}>Title :</span><br/>
            {props.todo.title}
            <br/>
            <span style={{'font-weight': 'bold', 'font-size':'16px'}}>Description :</span><br/>
            {props.todo.description}
            <br/>
            <span style={{'font-weight': 'bold','font-size':'16px'}}>Added on :</span><br/>
            {props.todo.addedDT}
            <br/>
            <span style={{'font-weight': 'bold','font-size':'16px'}}>Last updated on :</span><br/>
            {props.todo.updatedDT}


        </div>

      </Collapse>
            <hr hidden={!props.todo.title}/>
        </div>
    )
}

export default TodoItem;