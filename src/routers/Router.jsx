import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/home/Home";
import AuthRoots from "../layouts/AuthRoots";
import Login from "../components/pages/auth/Login";
import SignUp from "../components/pages/auth/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home,
        }
    ]
  },
  {
    path:'/',
    Component:AuthRoots,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'signup',
        Component:SignUp
      }
    ]
  }
]);