import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// component file
// import TodoContainer from "./components/classBased/TodoContainer"
import TodoContainer from './components/functionBased/TodoContainer';
// stylesheet
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
