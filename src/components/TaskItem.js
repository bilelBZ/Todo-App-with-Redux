import React from 'react'
import { useDispatch } from 'react-redux'
import { complete, deleteTask } from '../js/action/taskAction'
import EditTask from './EditTask'

const TaskItem = ({todo}) => {
    const dispatch = useDispatch()
    return (
        <div className="task">
           <div className={todo.isDone ? "done" : null}>{todo.task}</div>
           <div>
               <button onClick={() => dispatch(complete(todo.id))}>{todo.isDone ? "Undo" : "complete"}</button>
               <EditTask todo={todo}/>
               <button onClick={() => dispatch(deleteTask(todo.id))}>Delete</button>
           </div>
        </div>
    )
}

export default TaskItem
