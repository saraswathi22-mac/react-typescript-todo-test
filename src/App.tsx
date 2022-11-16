import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { ITodo, PageEnum } from "./components/Todo.type";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [showPage, setShowPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as ITodo);

  const onAddTodoClickHandle = () => {
    setShowPage(PageEnum.add);
  };
  const onBackBtn = () => {
    setShowPage(PageEnum.list);
  };
  const _setTodoList = (list: ITodo[]) => {
    setTodoList(list)
    window.localStorage.setItem("Todo List", JSON.stringify(list))
  }
  const onAddTodo = (data: ITodo) => {
    _setTodoList([...todoList, data]);
    setShowPage(PageEnum.list);
  };
  const deleteTodo = (data: ITodo) => {
    const indexToDelete = todoList.indexOf(data);
    const tempList = [...todoList];
    tempList.splice(indexToDelete, 1);
    _setTodoList(tempList);
  };

  const editTodo = (data: ITodo) => {
    setShowPage(PageEnum.edit);
    setDataToEdit(data);
  };
  const updateTodo = (data: ITodo) => {
    const filteredData = todoList.filter(val => val.id === data.id)[0];
    const indexOfRecord = todoList.indexOf(filteredData);
    const tempData = [...todoList];
    tempData[indexOfRecord] = data;
    _setTodoList(tempData);
    onBackBtn()
  };
  return (
    <div className="App">
      {showPage === PageEnum.list ? (
        <>
          <input
            type="button"
            value="Add Todo"
            onClick={onAddTodoClickHandle}
          />
          <TodoList
            list={todoList}
            onDeleteBtn={deleteTodo}
            onEditBtn={editTodo}
          />
        </>
      ) : (
        ""
      )}
      {showPage === PageEnum.add ? (
        <AddTodo onBackBtn={onBackBtn} onAddTodo={onAddTodo} />
      ) : (
        ""
      )}
      {showPage === PageEnum.edit ? (
        <EditTodo
          data={dataToEdit}
          onBackBtn={onBackBtn}
          onUpdateBtn={updateTodo}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
