import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registation from "../Pages/Registation/Registation";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {path: "/",
            element: <Home/>
        },
        {path: "/login",
            element: <Login/>
        },
        {path: "/registation",
            element: <Registation/>
        }
      ]
    },
  ]);