import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication.jsx/Login";
import Register from "../pages/Authentication.jsx/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
        // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><UpdateJob/></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: "/my-posted-jobs",
        element: <PrivateRoute><MyPostedJobs/></PrivateRoute>
      },
      {
        path: "/my-bids",
        element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
      },
      {
        path: "/bid-requests",
        element: <PrivateRoute><BidRequests></BidRequests></PrivateRoute>
      }
    ],
  },
]);

export default Router;
