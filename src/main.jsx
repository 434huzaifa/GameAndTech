import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import Home from './Home.jsx';
import Details from './Details.jsx';
import Private from './Private.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import ErrorElement from './ErrorElement.jsx';
import Taken from './Taken.jsx';
import Completed from './Completed.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/features.json')
      },
      {
        path:'/details/:eventid',
        element:<Private><Details></Details></Private>,
        loader:()=>fetch('/services.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/taken-event',
        element:<Private><Taken></Taken></Private>
      },
      {
        path:'/achivement',
        element:<Completed></Completed>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <Outlet></Outlet>
  </React.StrictMode>,
)
