import React, { useState } from 'react'
import { ITodo } from './Todo.type'

type Props = {
    onBackBtn: () => void,
    onAddTodo: (data: ITodo) => void;
}

const AddTodo = (props: Props) => {
  const [task, setTask] = useState("")
  const {onBackBtn, onAddTodo} = props;
  const onTaskChange = (e: any) => {
    setTask(e.target.value)
  }
  const onAddTodoBtn = (e: any) => {
    e.preventDefault();
    const data: ITodo = {
        id: Math.floor((Math.random() * 100) + 1),
        task: task
    }
    onAddTodo(data)
  }
  return (
    <form onSubmit={onAddTodoBtn} >
        <div>
            <label>Task</label>
            <input type="text" value={task} onChange={onTaskChange}/>
        </div>
        <div>
            <input type="button" value="Back" onClick={onBackBtn}/>
            <input type="submit" value="Add Todo" />
        </div>
    </form>
  )
}

export default AddTodo