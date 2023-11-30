import { Button } from "../Button/Button";
import styles from "./ToDoItem.module.css";

export function ToDoItem({
  id,
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {id} {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}

      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
}
