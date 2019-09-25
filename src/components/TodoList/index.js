import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/actions";

let n = 1;

const TodoList = () => {
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => {
          dispatch(addTodo(n));
          n++;
        }}
      >
        Adicionar todo
      </button>
    </div>
  );
};

export default TodoList;
