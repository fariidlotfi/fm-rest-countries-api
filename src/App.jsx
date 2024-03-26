import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./routes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
