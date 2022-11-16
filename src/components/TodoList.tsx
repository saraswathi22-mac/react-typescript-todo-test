import React from 'react'
import { ITodo } from './Todo.type';
import "./TodoList.style.css";

type Props = {
  list: ITodo[];
}

const TodoList = (props: Props) => {
  const {list} = props;
  return (
    <div>
      <table>
        <tr>
          <th>Task</th>
          <th>Actions</th>
        </tr>
        {list.map(todo => {
          console.log(todo)
          return <tr key={todo.id}>
          <td>{todo.task}</td>
          <td>
            <div>
              <input type="button" value="edit"/>
              <input type="button" value="delete"/>
            </div>
          </td>
        </tr>
        })}
      </table>
    </div>
  )
}

export default TodoList;