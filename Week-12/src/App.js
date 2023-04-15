import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, value: "Task 1" },
    { id: 2, value: "Task 2" }
  ]);
  const [newToDoText, setNewToDoText] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [editToDoId, setEditToDoId] = useState(null);
  const [editToDoText, setEditToDoText] = useState("");

  function handleEdit(id) {
    const index = id - 1;
    const updatedToDo = [...toDoList];
    updatedToDo[index].value = editToDoText;
    setToDoList(updatedToDo);
    setEditToDoId(null);
  }

  function handleDelete(id) {
    const updatedToDo = toDoList.filter((todo) => todo.id !== id);
    setToDoList(updatedToDo);
  }

  function toggleAddPopUp() {
    setShowPopUp((prevValue) => !prevValue);
  }

  function handleAdd() {
    const updatedTodoList = [...toDoList];
    updatedTodoList.unshift({
      value: newToDoText,
      id: toDoList.length + 1
    });
    setToDoList(updatedTodoList);
    setShowPopUp(false);
  }

  return (
    <>
      <div className="App">
        <h1>My To Do App</h1>
        <h2>Let's get some tasks done for the day</h2>
        <ul>
          {toDoList.map((todo) => (
            <li>
              {editToDoId === todo.id ? (
                <input
                  placeholder={todo.value}
                  // value={editToDoText}
                  onChange={(event) => setEditToDoText(event.target.value)}
                />
              ) : (
                todo.value
              )}
              <div className="actions">
                {editToDoId === todo.id ? (
                  <>
                    <button onClick={() => handleEdit(todo.id)}>Save</button>
                    <button
                      onClick={() => {
                        setEditToDoId(null);
                        setEditToDoText("");
                      }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      setEditToDoId(todo.id);
                      setEditToDoText(todo.value);
                    }}
                  >
                    Edit
                  </button>
                )}

                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
        <button className="add-btn" onClick={toggleAddPopUp}>
          {showPopUp ? "Cancel" : "Add"}
        </button>
        {showPopUp && (
          <div className="add-popup">
            <input
              placeholder="Add your todo"
              value={newToDoText}
              onChange={(event) => setNewToDoText(event.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        )}
      </div>
    </>
  );
}
