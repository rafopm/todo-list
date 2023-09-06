import Image from "next/image";
import React from "react";
import Styles from "../styles/TodoItem.module.css";

const TodoItem = ({ item, index, handleToggleComplete, handleDeleteItem }) => {
  return (
    <li className={Styles.todoItem}>
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

      <span onClick={() => handleToggleComplete(index)} style={item.completed ? { textDecorationLine: "line-through",  opacity: "0.5" } : {}}> {item.text}</span>
      <button onClick={() => handleDeleteItem(index)}>
        <Image src="/images/icon-cross.svg" 
        width={12}
        height={12}
        alt="Button cross"
        />
      </button>
    </li>
  );
};

export default TodoItem;
