import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CountryDetail from "./Pages/CountryDetail";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/country/:countryName",
    element: <CountryDetail />,
  },
]);

export { routes };
