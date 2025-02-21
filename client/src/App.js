import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hotels from "./components/Hotels/Hotels";

import HouseBooking from "./components/HouseBooking/HouseBooking";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/hotels" element={<Hotels />}></Route>*{" "}
        <Route exact path="/bookings" element={<HouseBooking />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
