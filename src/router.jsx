import { createBrowserRouter } from "react-router-dom";
import { Landing } from "./Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  // {
  //   path: "/",
  //   element:<Menu/>,
  // },
]);
