import React, { useState } from 'react'
import { ITodo } from './Todo.type'

type Props = {
    data: ITodo;
    onBackBtn: () => void,
    onUpdateBtn: (data: ITodo) => void
}

const EditTodo = (props: Props) => {
  const {data, onBackBtn, onUpdateBtn} = props;
  const [task, setTask] = useState(data.task)
  const onTaskChange = (e: any) => {
    setTask(e.target.value)
  }
  
  const onEditTodoBtn = (e: any) => {
    e.preventDefault();
    const update: ITodo = {
        id: data.id,
        task: task
    }
    onUpdateBtn(update)
  }
  return (
    <form onSubmit={onEditTodoBtn} >
        <div>
            <label>Task</label>
            <input type="text" value={task} onChange={onTaskChange}/>
        </div>
        <div>
            <input type="button" value="Back" onClick={onBackBtn}/>
            <input type="submit" value="Edit Todo" />
        </div>
    </form>
  )
}

export default EditTodo