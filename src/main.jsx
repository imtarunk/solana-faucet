import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Transation from './transation.jsx'
import Faucet from './Faucet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: < Faucet />,
      },
      {
        path: "/payment",
        element: <Transation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);