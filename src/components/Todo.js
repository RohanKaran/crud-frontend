import axios from 'axios'
import React, {useState} from 'react'
import {Button, Collapse} from "react-bootstrap";
import {FaTrash, FaEye} from "react-icons/fa";

function TodoItem(props) {
    const deleteTodoHandler = async (nanoid) => {
    await axios.delete(`http://localhost:8000/api/delete-todo/${nanoid}`).then(res => console.log(res.data))
    };
    const [open, setOpen] = useState(false);
    return (
        <div align={'right'} style={{'font-family':'Segoe UI'}}>
                <span className={'float-start text-break'}
                      style={{'padding-top':'7px','font-family': 'lato', 'font-size':'17px'}}>
                    <>{props.todo.title}</>
                </span>
            <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="mx-2" variant={'outline-info'} style={{borderRadius:'100px'}}
      >
        <FaEye style={{'padding-bottom':'3px'}}/>
      </Button>
                <Button onClick={() => deleteTodoHandler(props.todo.nanoid)} className=""
                        variant={'outline-danger'} style={{borderRadius:'100px'}} >
                    <FaTrash style={{'padding-bottom':'3px'}}/></Button>
            <Button href={`/${props.todo.nanoid}`}
                        variant={'outline-danger'} style={{borderRadius:'100px'}} >
                    <FaTrash style={{'padding-bottom':'3px'}}/>U</Button>

      <Collapse in={open}>

        <div id="example-collapse-text" className="card-body " style={{'word-wrap':'break-word'}} align={'left'}>
            <span style={{'font-family': 'lato', 'font-size':'16px'}}>Description :</span><br/>
            {props.todo.description}
            <br/>
            <span style={{'font-family': 'lato','font-size':'16px'}}>Added on :</span><br/>{props.todo.addedDT}
            <br/>
            <span style={{'font-family': 'lato','font-size':'16px'}}>Last updated on :</span><br/>{props.todo.updatedDT}


        </div>

      </Collapse>
            <hr/>
        </div>
    )
}

export default TodoItem;