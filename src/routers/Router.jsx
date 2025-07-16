import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/home/Home";
import AuthRoots from "../layouts/AuthRoots";
import Login from "../components/pages/auth/Login";
import SignUp from "../components/pages/auth/SignUp";
import ForgetPass from "../components/pages/auth/ForgetPass";
import Coverage from "../components/pages/Coverage/Coverage";
import AboutUs from "../components/pages/AboutUs/AboutUs";
import Pricing from "../components/pages/Pricing/Pricing";
import Rider from "../components/pages/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
          path: 'coverage',
          Component: Coverage,
        },
        {
          path:'about-us',
          Component: AboutUs
        },
        {
          path: 'pricing',
          Component: Pricing,
        },
        {
          path:'rider',
          Component: Rider
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
      },
      {
        path: 'forgetpassword',
        Component: ForgetPass
      }
    ]
  }
]);