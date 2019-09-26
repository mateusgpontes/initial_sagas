export const addTodo = text => {
  return {
    type: "ASYNC_ADD_TODO",
    text: text
  };
};
