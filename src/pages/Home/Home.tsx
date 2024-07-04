import React, { FC, useState } from "react";
import "./Home.css";
import { Input } from "../../components/Input";
import { List } from "../../components/List";
import { useTheme } from "../../hooks/useTheme";
import { Button } from "../../components/Button";

export interface ITodoItem {
  id: number;
  text: string;
  isDone: boolean;
}

type TodosProps = {};

const todoListLocalStorage = localStorage.getItem("list");
const todoList: ITodoItem[] = todoListLocalStorage
  ? JSON.parse(todoListLocalStorage)
  : [];

export const Home: FC<TodosProps> = () => {
  const [list, setList] = useState<ITodoItem[]>(todoList);
  const [mainInput, setMainInput] = useState("");
  const [theme, toggleTheme] = useTheme();

  const handleMainInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainInput(event.target.value);
  };

  const createTodoItem = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;

    setList((prevList) => [
      ...prevList,
      {
        id: prevList.length + 1,
        text: mainInput,
        isDone: false,
      },
    ]);

    localStorage.setItem(
      "list",
      JSON.stringify([
        ...list,
        {
          id: list.length + 1,
          text: mainInput,
          isDone: false,
        },
      ])
    );

    setMainInput("");
  };

  const removeItemList = (id: number) => {
    setList(list.filter((item) => item.id !== id));

    localStorage.setItem(
      "list",
      JSON.stringify(list.filter((item) => item.id !== id))
    );
  };

  return (
    <div className="todos">
      <Button
        className="todos-theme-btn"
        text={theme === "light" ? "Тёмная" : "Светлая"}
        onClick={toggleTheme}
      />
      <Input
        onKeyDown={createTodoItem}
        onChange={handleMainInput}
        text={mainInput}
        className="input-new-task"
        placeholder="Введите задачу..."
      />
      <List removeItemList={removeItemList} list={list} />
    </div>
  );
};
