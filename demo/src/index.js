import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/navbar';
import Login from './components/login/login';
import Register from './components/REGISTER/reg'
import Home from './components/House/home'
import Cal from './components/cal/cal'
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router =createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/navbar",
    element:<Navbar/>,

    children: [
        {
          path:"/navbar/register",
          element:<Register/>
        },
        {
          path:"/navbar/home",
          element:<Home/>
        },
        {
          path:"/navbar/cal",
          element:<Cal/>
        }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
