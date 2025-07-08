import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../components/home/Home";

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
            
        }
    ]
  },
]);