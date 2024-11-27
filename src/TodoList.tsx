import React from "react";
import { Todo } from "./types";
import TodoItem from "./TodoItem"; // ◀◀ 追加
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faClock,
  faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";


type Props = {
  todos: Todo[];
  updateIsDone: (id: string, value: boolean) => void;
  remove: (id: string) => void;
};

const num2star = (n: number): string => "★".repeat(0 + n);

const TodoList = (props: Props) => {
  const todos = props.todos;

  if (todos.length === 0) {
    return (
      <div className="text-red-500">
        現在、登録されているタスクはありません。
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          remove={props.remove}
          updateIsDone={props.updateIsDone}
        />
      ))}
    </div>
     <div className="ml-2">優先度 </div>
            <div className="ml-2 text-orange-400">
              {num2star(todo.priority)}
            </div>
          </div>
          {todo.deadline && (
            <div className="ml-4 flex items-center text-sm text-slate-500">
              <FontAwesomeIcon
                icon={faClock}
                flip="horizontal"
                className="mr-1.5"
              />
              <div className={twMerge(todo.isDone && "line-through")}>
                期限: {dayjs(todo.deadline).format("YYYY年M月D日 H時m分")}
              </div>
            </div>

  );
};

export default TodoList;
