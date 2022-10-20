import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Todo from './Todo'
// import UseReducer from './useReducer';
import reportWebVitals from './reportWebVitals';
// import TodoApp from './TodoApp';
// import App2 from './UseContext/App';
// import { ThemeProvider } from './UseContext/ThemContext';
// import App from './Store/App';
// import { StoreProvider } from './Store';
// import UseRef from './useRef/useRef';
import App from "./useMemo/App"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
