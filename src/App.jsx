import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/Homepage";
import CountryDetail from "./Pages/CountryDetail";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/fm-rest-countries-api" element={<Homepage />} />
          <Route
            path="/fm-rest-countries-api/country/:countryName"
            element={<CountryDetail />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
