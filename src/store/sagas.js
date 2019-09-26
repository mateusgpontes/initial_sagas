import { takeEvery, put } from "redux-saga/effects";

function* asyncAddTodo(action) {
  yield put({ type: "ADD_TODO", text: action.text });
}

function* root() {
  yield [
    takeEvery("ASYNC_ADD_TODO", asyncAddTodo),
    asyncAddTodo("testado"),
    console.log(asyncAddTodo("testado"))
  ];
}

export default root;
