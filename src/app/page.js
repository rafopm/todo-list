"use client";
import Styles from "../../styles/Home.module.css";

import React, { useState } from "react";
import Image from "next/image";

const ListaTodos = [
  { id: 1, text: "Complete online JavaScript Course", completed: true },
  { id: 2, text: "Jog around the park 3x", completed: false },
  { id: 3, text: "10 minutes meditation", completed: false },
  { id: 4, text: "Read for 1 hour", completed: false },
  { id: 5, text: "Pick up groceries", completed: false },
  { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false },
];

function App() {
  const [todoList, setTodoList] = useState(ListaTodos);
  const [newItem, setNewItem] = useState("");

  const [filter, setFilter] = useState("all");

  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddItem();
    }
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setTodoList([...todoList, { text: newItem, completed: false }]);
      setNewItem("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedItems = [...todoList];
    updatedItems[index].completed = !updatedItems[index].completed;
    setTodoList(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...todoList];
    updatedItems.splice(index, 1);
    setTodoList(updatedItems);
  };

  const handleDeleteCompleted = () => {
    const updatedItems = todoList.filter((item) => !item.completed);
    setTodoList(updatedItems);
  };

  const countComplete = () => {
    const completedItems = todoList.filter((item) => item.completed === false);
    return completedItems.length;
  };

  const filteredTodos = todoList.filter((item) => {
    if (filter === "completed") {
      return item.completed;
    } else if (filter === "active") {
      return !item.completed;
    } else {
      return true;
    }
  });

  console.log(todoList);
  return (
    <div className={Styles.container}>
      <div className={Styles.contentIllustration}>
        <Image
          width={375}
          height={200}
          src="/images/bg-mobile-dark.jpg"
          alt="Bg mobile dark illustration"
        />

        <div className={Styles.illustration}></div>
      </div>

      <div className={Styles.todosContainer}>
        <span className={Styles.title}>
          <h1>TODO</h1>{" "}
          <Image
            width={20}
            height={20}
            src="/images/icon-moon.svg"
            alt="Moon illustration"
          />
        </span>
        <div className={Styles.addTodo}>
          <button onClick={handleAddItem}></button>
          <input
            placeholder="Create a new todo..."
            className={Styles.txtTodo}
            type="text"
            value={newItem}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <div className={Styles.todosItems}>
          <ul>
            {filteredTodos.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={`customCheckbox-${item.id}`}
                  className="customCheckbox"
                  checked={item.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <label
                  htmlFor={`customCheckbox-${item.id}`}
                  className="customCheckboxLabel"
                ></label>

                <span onClick={() => handleToggleComplete(index)}>
                  {" "}
                  {item.text}
                </span>
                <button onClick={() => handleDeleteItem(index)}>+</button>
              </li>
            ))}
          </ul>
          <div className={Styles.status}>
            <div>{countComplete()} items left</div>
            <div
              onClick={() => handleDeleteCompleted()}
              className={Styles.clearCompleted}
            >
              Clear Completed
            </div>
          </div>
        </div>
        <div className={Styles.filter}>
          <span
            onClick={() => setFilter("all")}
            data-value="all"
            className={filter === "all" ? Styles.selected : ""}
          >
            All
          </span>
          <span
            onClick={() => setFilter("active")}
            data-value="active"
            className={filter === "active" ? Styles.selected : ""}
          >
            Active
          </span>
          <span
            onClick={() => setFilter("completed")}
            data-value="completed"
            className={filter === "completed" ? Styles.selected : ""}
          >
            Completed
          </span>
        </div>
        <div className={Styles.alertDragAndDrop}>Drag and drop to reordenar list</div>
      </div>
      <div className={Styles.contenedorTemplate}>
        <img
          className={Styles.imagentemplate}
          src="/design/mobile-design-light.jpg"
          alt="Descripción de la imagen"
        ></img>
      </div>
    </div>
  );
}

export default App;
