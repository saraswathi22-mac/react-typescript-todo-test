import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { dummyTodoList, ITodo, PageEnum } from "./components/Todo.type";
import AddTodo from "./components/AddTodo";

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>(dummyTodoList);
  const [showPage, setShowPage] = useState(PageEnum.list);
  const onAddTodoClickHandle = () => {
    setShowPage(PageEnum.add)
  }
  const onBackBtn = () => {
    setShowPage(PageEnum.list)
  }
  const onAddTodo = (data: ITodo) => {
    setTodoList([...todoList, data])
    setShowPage(PageEnum.list)
  }
  return (
    <div className="App">
      {showPage === PageEnum.list ? (
        <>
          <input type="button" value="Add Todo" onClick={onAddTodoClickHandle}/>
          <TodoList list={todoList} />
        </>
      ) : (
        ""
      )}
      {showPage === PageEnum.add ? <AddTodo onBackBtn={onBackBtn} onAddTodo={onAddTodo} /> : ""}
    </div>
  );
}

export default App;
