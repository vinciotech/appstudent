import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './apps/AppHelloWorld';
//import App from './apps/AppAttivita';
//import App from './apps/AppContatore';
//import App from './apps/AppStudents';
// import App from './apps/AppStudentsRdx';
//import App from './apps/AppStudenteRdxRoute';
//import App from './apps/AppStudentMui';
//import App from './apps/AppStudent v1.0';
//import App from './apps/AppStudent v1.1';
import App from './apps/AppStudent v1.2';
import reportWebVitals from './reportWebVitals';

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
