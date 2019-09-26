import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../store/actions";

let n = 1;

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(addTodo(n));
          console.log(addTodo(n));
          console.log(todos);
          n++;
        }}
      >
        Adicionar todo
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
