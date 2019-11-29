import * as actionTypes from './actionTypes';

const initialState = {
  term: '',
  items: [],
  flg: false,
}

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.INPUT_VALUE: {
      return {
        ...state,
        term: payload,
      }
    }
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        term: '',
        items: [
          ...state.items,
          {
            id: payload.id,
            todoItem: state.term,
            completed: false,
          }
        ],
        flg: false,
      }
    }
    case actionTypes.UPDATE_TODO: {
      return {
        ...state,
        term: '',
        items: state.items.map((item, index) =>
          (state.selectedItemId === index) ?
            {
              ...item,
              todoItem: payload.term
            } :
            item),
        flg: false,
      }
    }
    case actionTypes.DELETE_TODO: {
      return {
        ...state,
        items: state.items.filter((item) => {
          return item.id !== payload.id
        }),
      }
    }
    case actionTypes.CHECKBOX_TODO: {
      return {
        ...state,
        items: state.items.map(item =>
          (item.id === payload.id) ?
            {
              ...item,
              completed: !item.completed
            } :
            item)
      }
    }
    case actionTypes.EDIT_TODO: {
      return {
        ...state,
        term: state.items[payload.id].todoItem,
        flg: true,
        selectedItemId: payload.id,
      }
    }
    default:
      return state;
  }
}
