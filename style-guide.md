# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700


'use client'

import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { text: newItem, completed: false }]);
      setNewItem('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Lista de Elementos</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(index)}
            />
            {item.text}
            <button onClick={() => handleDeleteItem(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
    </div>
  );
}

export default App;


-------------------
:root {
  --very-light-gray: hsl(0, 0%, 98%);
  --very-light-grayish-blue: hsl(236, 33%, 92%);
  --light-grayish-blue: hsl(233, 11%, 84%);
  --dark-grayish-blue: hsl(236, 9%, 61%);
  --very-dark-grayish-blue: hsl(235, 19%, 35%);

  --blue: hsl(220, 98%, 61%);
  /* --background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%); */
  --background-color-dark: linear-gradient(
    to right,
    hsl(192, 100%, 67%),
    hsl(280, 87%, 65%)
  );

  --background-color: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));

  --background-gradiente: linear-gradient(to right, blue, green);
}

body {
  color: var(--foreground-rgb);
  background-color: var(--background-gradiente);
}

@media (prefers-color-scheme: dark) {
  :root {
    --very-dark-blue: hsl(235, 21%, 11%);
    --very-dark-desaturated-blue: hsl(235, 24%, 19%);
    --light-grayish-blue: hsl(234, 39%, 85%);
    --light-grayish-blue-hover: hsl(236, 33%, 92%);
    --dark-grayish-blue: hsl(234, 11%, 52%);
    --very-dark-grayish-blue: hsl(233, 14%, 35%);
    --very-dark-grayish-blue: hsl(237, 14%, 26%);
    --background-color-dark: linear-gradient(
      to right,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    --background-color: linear-gradient(
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
    --background-gradiente: linear-gradient(to right, blue, green);
  }

  body {
    color: var(--foreground-rgb);
    background-color: var(--background-gradiente);
  }
}
