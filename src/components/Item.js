import React from 'react'
import { BsXSquareFill, BsFillCheckSquareFill, BsFillTrashFill } from "react-icons/bs";

function Item(props) {
  return (
    <li className="list-group-item d-flex justify-content-between my-2">
        <h6 className={`mt-1 mb-0 align-middle ${props.completed ? 'completed' : ''}`}>{props.title}</h6>
        <div className="todo-icon">
            <span 
                className={`mx-2 ${props.completed ? 'text-success' : 'text-secondary'}`}
                onClick={() => props.handleDoneTask(props.id, props.completed)}
            >
                {props.completed ? <BsFillCheckSquareFill/> : <BsXSquareFill/>}
            </span>
            <span 
                className="mx-2 text-danger"
                onClick={() => props.handleDeleteTask(props.id)}
            >
                <BsFillTrashFill/>
            </span>
        </div>
    </li>
  )
}

export default Item