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

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setItems([...todoList, { text: newItem, completed: false }]);
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
        <input className={Styles.txtTodo} type="text"></input>

        <div className={Styles.todosItems}>
          <ul>
            {todoList.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  
                  checked={item.completed}
                  onChange={() => handleToggleComplete(index)}
                />
                <span> {item.text}</span>

                <button onClick={() => handleDeleteItem(index)}>x</button>
              </li>
            ))}
          </ul>
          <div></div>
        </div>
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
