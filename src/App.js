import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';
import Todo from './components/Todo/Todo';

import './App.css';

const store = createStore(
  rootReducer,
  composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Todo app React-Redux</h1>
        </header>
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
