import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../../pages/Home/Home";
import UserPage from "../../pages/UserPage/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },  {
    path: "/users/:id",
    element: <UserPage/>,
  },
]); 

function Main() {
  return (
    <main>
      <React.StrictMode>
       <RouterProvider router={router} />
      </React.StrictMode>
    </main>
  );
}

export default Main;

