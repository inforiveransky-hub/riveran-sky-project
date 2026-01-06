import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import HomeGallery from "../components/homepage/HomeGallery";
import Rooms from "../pages/Rooms";
import OurFacility from "../pages/OurFacility";
import ContactL from "../pages/ContactL";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/gallery",
        element: <HomeGallery />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/ourFacilify",
        element: <OurFacility />,
      },
      { path: "/contact", element: <ContactL /> },
    ],
  },
]);

export default router;
