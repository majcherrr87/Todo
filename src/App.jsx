import { useState } from "react";
import styles from "./App.module.css";
import { ToDoItem } from "./components/ToDoItem/ToDoItem";
import { Form } from "./components/from/Form";
import { getSubHeading } from "./utils/getSubHeading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: "Zapłacić za rachunki", done: false, id: 1 },
    { name: "Wyżucić śmieci", done: true, id: 2 },
  ]);

  function addItem(newToName) {
    setTodos((prev) => [
      {
        name: newToName,
        done: false,
        id: Math.random(),
      },
      ...prev,
    ]);
    setIsFormShown(false);
  }
  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, done: true } : todo))
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>ToDo</h1>
          <h2>{getSubHeading(todos.length)}</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.button}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && <Form onFormSubmit={(newToName) => addItem(newToName)} />}
      <ul>
        {todos.map(({ name, done, id }) => (
          <ToDoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
