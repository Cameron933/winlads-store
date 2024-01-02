import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";
import GoogleAnalytics from "./utils/GoogleAnalytics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/privacypolicy",
      element: <Privacy />,
    },
    {
      path: "/termsconditions",
      element: <TermsCondition />,
    },
  ]);
  return (
    <>
    <GoogleAnalytics trackingCode="G-YDXC1L2QP5" />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
