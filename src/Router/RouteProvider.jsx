import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { VideoPage, HomePage, SettingPage } from "../Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:path",
    element: <HomePage />,
  },
  {
    path: "/:path/:id",
    element: <HomePage />,
  },
  {
    path: "/video/:id",
    element: <VideoPage />,
  },
  {
    path: "/account-setting/:id",
    element: <SettingPage />,
  },
]);

const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
export default RouteProvider;
