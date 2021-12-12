import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css"
import Update from './components/Update';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.render(
   <React.StrictMode> <div id="main" className="App justify-content-center align-content-center mx-auto my-auto" style={{"width": "480px", "backgroundColor":"white"}}>
            <br/>
            <h1 className="card-body text-white bg-primary mb-4">
                Task Manager
            </h1></div>
  <Router>

      <Routes>
          <Route path='/' element={<App/>}/>
          <Route path=':nanoid' element={<Update/>}/>

      </Routes>
  </Router></React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
