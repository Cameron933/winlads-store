import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";
import GoogleAnalytics from "./utils/GoogleAnalytics";
import TagManager from "react-gtm-module";
import GiveawayDT from "./pages/GiveawayDT";
import Banners from "./pages/NewBanner";
import DistrictOne from "./pages/DistrictOne";

function App() {
  const tagManagerArgs = {
    gtmId: "GTM-MMG9VWGX",
  };

  TagManager.initialize(tagManagerArgs);

  const router = createBrowserRouter([
    {
      path: "/privacypolicy",
      element: <Privacy />,
    },
    {
      path: "/termsconditions",
      element: <TermsCondition />,
    },
    {
      path: "/giveaway",
      element: <GiveawayDT />,
    },
    {
      path: "/:id?",
      element: <Home />,
    },
    {
      path: "/banner",
      element: <Banners />,
    },
    {
      path: "/district-1",
      element: <DistrictOne />,
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
