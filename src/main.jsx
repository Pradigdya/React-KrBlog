import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";

import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
  },
  {
    path: "/home",
    element: <HomePage></HomePage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/contact",
    element: <ContactPage></ContactPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
