
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import Privacy from "./pages/Privacy";
import TermsCondition from "./pages/TermsCondition";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/privacy",
      element: <Privacy/>,
    },
    {
      path: "/conditions",
      element: <TermsCondition/>,
    },
   
    
      
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
