import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './LayOut/Main';
import Home from './Pages/Home/Home/Home';
import MyProjects from './Pages/MyProjects/MyProjects';
import ContactMe from './Pages/ContactMe/ContactMe';
import Errorpage from './Pages/Errorpage/Errorpage';
import About from './Pages/Home/About/About';
import Blogs from './Pages/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [{
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/myprojects",
      element: <MyProjects></MyProjects>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "/blog",
      element: <Blogs></Blogs>,
    },
    {
      path: "/contact",
      element: <ContactMe></ContactMe>,
    },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
