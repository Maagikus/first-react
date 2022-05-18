import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World';
const root = ReactDOM.createRoot(document.getElementById('root'));
const elem = (
  <div>
    <h2 className='text'>{text}</h2>
    <input type="text" name="" id="" />
    <button>Click</button>
  </div>
);
root.render(
elem,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

