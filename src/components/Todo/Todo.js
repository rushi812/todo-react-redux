import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoItem from './TodoItem/TodoItem';

import { inputHandler, addTodoHandler, updateTodoHandler } from '../redux/actions';
import './Todo.css';

const Todo = ({ inputHandler, addTodoHandler, updateTodoHandler, term, flg }) => {
  return (
    <div className="todoContainer">
      <h2 className="todoHeader">What do you want to do ?</h2>
      <div className="addTodoContainer">
        <input className="addTodoInp" id="inp" type="text" value={term} onChange={inputHandler} />
        {(flg === false) ?
          <button className="addTodoBtn" type="button" onClick={() => addTodoHandler(term)}>Add</button> :
          <button className="updateTodoBtn" type="button" onClick={() => updateTodoHandler(term)}>Update</button>
        }
      </div>
      <TodoItem />
    </div >
  );
}

const mapStateToProps = (state) => ({
  term: state.Todo.term,
  items: state.Todo.items,
  flg: state.Todo.flg,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  inputHandler,
  addTodoHandler,
  updateTodoHandler,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Todo);