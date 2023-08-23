import React from "react";
import Header from "./header";
import Body from "./body";
import About from "./About";
import Contact from "./Contact";
import RestMenu from "./RestMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const FoodApp = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      {/* <Body /> */}
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <FoodApp />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestMenu />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
