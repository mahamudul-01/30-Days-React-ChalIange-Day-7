import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './index.css';
import Users from './components/Users/Users';
import UserDetils from './components/UserDetails/UserDetils';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        element: <Users></Users>
      },
      {
        path:'/users/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDetils></UserDetils>
      }
    ]

  },
]);
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
