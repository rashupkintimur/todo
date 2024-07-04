import React, { FC, useState } from "react";
import "./TodoItem.css";
import { Input } from "../Input";
import { Button } from "../Button";
import { ITodoItem } from "../../pages/Home";

type TodoItemProps = ITodoItem & {
  list: ITodoItem[];
  removeItemList: (id: number) => void;
};

export const TodoItem: FC<TodoItemProps> = ({
  list,
  text,
  id,
  isDone,
  removeItemList,
}) => {
  const [isMarked, setIsMarked] = useState(isDone);
  const [input, setInput] = useState(text);

  const handleIsMarked = () => {
    setIsMarked(!isMarked);

    localStorage.setItem(
      "list",
      JSON.stringify(
        list.map((item) => {
          if (item.id === id) {
            return { ...item, isDone: !isMarked };
          }

          return item;
        })
      )
    );
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  return (
    <li className={"todo-item " + (isMarked ? "success-task" : "")}>
      <Input onChange={handleInput} text={input} className="todo-input" />
      <div className="todo-btns">
        <Button
          className={"success-btn"}
          onClick={handleIsMarked}
          text="Пометить"
        />
        <Button
          className={"danger-btn"}
          onClick={() => removeItemList(id)}
          text="Удалить"
        />
      </div>
    </li>
  );
};
