import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "./containers/Layout";
import Login from "./containers/Login";
import Register from "./containers/Register";
import Home from "./containers/Home";
import Courses from "./containers/Courses";
import Course from "./containers/Course";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path="*" element={<Home/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="course/:id" element={<Course/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
