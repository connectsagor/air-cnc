import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Hotels.css";
import { useNavigate } from "react-router";
const Hotels = () => {
  const booking = JSON.parse(sessionStorage.getItem("booking"));
  const navigate = useNavigate();
  const [hotelData, setHotelData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/hotels?location=" + booking.location)
      .then((res) => res.json())
      .then((result) => {
        setHotelData(result.data);
      });
  }, []);

  console.log(booking);

  const handleGetHotel = (id) => {
    navigate(`/bookings/${id}`);
  };
  return (
    <>
      <Navbar />

      <div className="container my-3">
        <div className="row">
          <div className="col-md-6">
            <p>232 stays in {booking.arrivalDate}</p>
            <h5>Stay in {booking.location} Division</h5>
            <div className="filter-menu d-flex gap-3 mt-3">
              <button className="border-1 bg-transparent py-2 px-3 rounded-4 font-small">
                Cancelation flexibility
              </button>
              <button className="border-1 bg-transparent py-2 px-3 px-3 rounded-4 font-small">
                Type of places
              </button>
              <button className="border-1 bg-transparent py-2 px-3 px-3 rounded-4 font-small">
                Price
              </button>
              <button className="border-1 bg-transparent py-2 px-3 px-3 rounded-4 font-small">
                Instant Book
              </button>
            </div>

            {hotelData &&
              hotelData.map((hotel) => {
                return (
                  <div className="hotels my-4" key={hotel.id}>
                    <div
                      onClick={() => handleGetHotel(hotel.id)}
                      className="row"
                    >
                      <div className="col-md-6">
                        <img
                          className="w-100 rounded-1"
                          src={require(`../../images/${hotel.img}`)}
                          alt="hotel"
                        />
                      </div>
                      <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h6>{hotel.name}</h6>
                        <p>{hotel.location}</p>
                        <p>${hotel.cost}</p>
                        <p>{hotel.review}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="col-md-6">
            <div className="map-box h-100 w-100">
              <iframe
                className="map h-100 w-100"
                title="Map"
                src={`https://www.google.com/maps?q=${booking.location}&output=embed`}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
