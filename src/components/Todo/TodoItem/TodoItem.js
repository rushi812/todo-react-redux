import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deleteTodoHandler, checkBoxHandler, editTodoHandler } from '../../redux/actions';

function TodoItem({ deleteTodoHandler, checkBoxHandler, editTodoHandler, items, term }) {
  return (
    <div>
      <ul>
        {
          items &&
          items.map((item, index) => (
            <li key={index} >
              <input type="checkbox" onClick={() => checkBoxHandler(item.id)} />
              <p className={item.completed ? 'checked' : 'not-checked'}>{item.todoItem}</p>
              <button className="editBtn" type="button" onClick={() => editTodoHandler(index, term)}>Edit</button>
              <button className="deleteBtn" type="button" onClick={() => deleteTodoHandler(item.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  term: state.Todo.term,
  items: state.Todo.items,
  flg: state.Todo.flg,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  deleteTodoHandler,
  checkBoxHandler,
  editTodoHandler,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);