const INITIAL_STATE = [{ id: Math.random(), text: "Contador de clicks" }];

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text
        }
      ];
    default:
      return state;
  }
};

export default todos;
