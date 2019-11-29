import * as actionTypes from './actionTypes';


export function inputHandler(event) {
  return {
    type: actionTypes.INPUT_VALUE,
    payload: event.target.value
  }
}

export function addTodoHandler(term) {
  return {
    type: actionTypes.ADD_TODO,
    payload: {
      id: +new Date(),
      term,
    }
  }
}

export function updateTodoHandler(term) {
  return {
    type: actionTypes.UPDATE_TODO,
    payload: {
      term,
    }
  }
}

export function deleteTodoHandler(id) {
  return {
    type: actionTypes.DELETE_TODO,
    payload: {
      id,
    }
  }
}

export function checkBoxHandler(id) {
  return {
    type: actionTypes.CHECKBOX_TODO,
    payload: {
      id,
    }
  }
}

export function editTodoHandler(id, term) {
  return {
    type: actionTypes.EDIT_TODO,
    payload: {
      id,
      term,
    }
  }
}