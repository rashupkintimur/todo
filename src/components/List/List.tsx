import { FC } from "react";
import "./List.css";
import { TodoItem } from "../TodoItem";
import { ITodoItem } from "../../pages/Home";

export type ListProps = {
  list: ITodoItem[];
  removeItemList: (id: number) => void;
};

export const List: FC<ListProps> = ({ list, removeItemList }) => {
  return (
    <ul className="todo-list">
      {list.map((item) => (
        <TodoItem
          removeItemList={removeItemList}
          list={list}
          text={item.text}
          id={item.id}
          isDone={item.isDone}
          key={item.id}
        />
      ))}
    </ul>
  );
};
