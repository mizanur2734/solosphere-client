import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication.jsx/Login";
import Register from "../pages/Authentication.jsx/Register";
import JobDetails from "../pages/JobDetails";

const router= createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
        {
            index: true,
            element: <Home/>,
            // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/job/:id",
            element: <JobDetails/>
        }
    ]
  },
]);

export default router;