import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Error from "../Error/Error";
import Home from "../../PageComponent/Home/Home";
import Note from "../../PageComponent/Note/Note";
import Calender from "../../PageComponent/Calender/Calender";
import About from "../../PageComponent/about/About";
import SerVices from "../../PageComponent/SerVices/SerVices";
// import Auth from "../../PageComponent/AuthComponent/Auth";
import Login from "../../PageComponent/AuthComponent/Login/Login";
import SignUp from "../../PageComponent/AuthComponent/SignUp/SignUp";
import Routine from "../../PageComponent/RouTine/Routine";
import Blog from "../../PageComponent/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/services",
        element: <SerVices></SerVices>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      // {
      //   path: "/auth",
      //   element: <Auth></Auth>,
      // },
      {
        path: "/note",
        element: <Note></Note>,
      },
      {
        path: "/calender",
        element: <Calender></Calender>,
      },
      {
        path: "/routine",
        element: <Routine></Routine>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
