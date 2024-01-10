import { createBrowserRouter, RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";
import GoogleAnalytics from "./utils/GoogleAnalytics";
import TagManager from 'react-gtm-module'
import GiveawayDT from "./pages/GiveawayDT";


function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-MMG9VWGX'
  }

  TagManager.initialize(tagManagerArgs)

  const router = createHashRouter([
   
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
      path: "/",
      element: <Home />,
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
