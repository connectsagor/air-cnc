import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hotels from "./components/Hotels/Hotels";

import HouseBooking from "./components/HouseBooking/HouseBooking";
import { createContext, useState } from "react";
export const HotelContext = createContext();
function App() {
  const [user, setUser] = useState("");
  const [HotelBooking, setHotelBooking] = useState({});
  return (
    <HotelContext.Provider
      value={[
        { user, setUser },
        { HotelBooking, setHotelBooking },
      ]}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>*{" "}
          <Route path="/bookings/:id" element={<HouseBooking />}></Route>
        </Routes>
      </BrowserRouter>
    </HotelContext.Provider>
  );
}

export default App;
