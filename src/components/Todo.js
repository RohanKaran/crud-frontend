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
                <span className={'float-start text-break'}
                      style={{'padding-top':'7px','font-family': 'lato', 'font-size':'17px', 'word-wrap':'break-word'}}>
                    {props.todo.title}
                </span>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mx-2" variant={'outline-info'} style={{borderRadius:'100px'}}
      >
        <FaEye style={{'padding-bottom':'3px'}}/>
      </Button>


            <Dropdown as={ButtonGroup} className="mx-1">

                <Dropdown.Toggle variant={'outline-primary'}/>
                <Dropdown.Menu align={'end'}>
                    <div align={'right'}>
                    <Dropdown.Item href={`/crud-frontend/${props.todo.nanoid}`} >
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
            <span style={{'font-family': 'lato', 'font-size':'16px'}}>Title :</span><br/>
            {props.todo.title}
            <br/>
            <span style={{'font-family': 'lato', 'font-size':'16px'}}>Description :</span><br/>
            {props.todo.description}
            <br/>
            <span style={{'font-family': 'lato','font-size':'16px'}}>Added on :</span><br/>
            {props.todo.addedDT}
            <br/>
            <span style={{'font-family': 'lato','font-size':'16px'}}>Last updated on :</span><br/>
            {props.todo.updatedDT}


        </div>

      </Collapse>
            <hr/>
        </div>
    )
}

export default TodoItem;