import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import AddAToy from "../pages/AddAToy/AddAToy";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/all-toys",
                element: <AllToys></AllToys>,
            },
            {
                path: "/my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
            },
            {
                path: "/add-a-toy",
                element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>,
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>,
            }

        ]
    },
]);

export default router;