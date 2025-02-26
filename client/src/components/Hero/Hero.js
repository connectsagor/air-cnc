import React, { useEffect, useState } from "react";
import { Dash, Plus, StarFill } from "react-bootstrap-icons";
import "./Hero.css";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  const [homesData, setHomesData] = useState("");

  const [location, setLocation] = useState("");
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [seatCount, setSeatCount] = useState({
    adult: 2,
    child: 2,
    babies: 2,
  });

  useEffect(() => {
    fetch("http://localhost:5000/get-hotels")
      .then((res) => res.json())
      .then((result) => {
        setHomesData(result.data);
      });
  }, []);

  const handleGetHotel = (id) => {
    navigate(`/bookings/${id}`);
  };

  const handleSearch = () => {
    const BookingData = {
      location,
      arrivalDate,
      departureDate,
      seatCount,
      cleaning: 10,
      serviceCharge: 10,
    };
    if (location && arrivalDate && departureDate) {
      sessionStorage.setItem("booking", JSON.stringify(BookingData));
      navigate("/hotels");
    }
  };
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <h5 className="mb-4">Where do you want to go?</h5>

          <div className="form-group d-flex flex-column shadow-lg p-3 rounded-2">
            <label htmlFor="location">Location</label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="border-0 input-field mt-2"
              type="text"
              name="location"
              id="location"
              placeholder="Add city, landmark or adress"
            />
          </div>
          <div className="w-100 mt-2 form-group d-flex gap-3  justify-content-center align-items-center p-2 rounded-2">
            <div className="arrival w-50 d-flex flex-column shadow-lg py-3 px-2">
              <label htmlFor="arrival">Arrival</label>
              <input
                onChange={(e) => setArrivalDate(e.target.value)}
                value={arrivalDate}
                className="border-0 input-field mt-1"
                type="date"
                id="arrival"
                name="arrival"
              ></input>
            </div>
            <div className="departure w-50 d-flex flex-column shadow-lg py-3 px-2">
              <label htmlFor="departure">Departure</label>
              <input
                onChange={(e) => setDepartureDate(e.target.value)}
                value={departureDate}
                className="border-0 input-field mt-1"
                type="date"
                id="departure"
                name="departure"
              ></input>
            </div>
          </div>
          <div className="form-group d-flex flex-column shadow-lg p-3 rounded-2">
            <div className="total border-bottom">
              <label>Guest</label>
              <p className="total-member mt-2">2 Adult, 1 Child</p>
            </div>

            <div className="adult mt-3 d-flex justify-content-between align-items-center">
              <p>Adult</p>
              <div>
                <Dash
                  className="font-bold mx-3"
                  onClick={() =>
                    setSeatCount((prevCount) => ({
                      ...prevCount,
                      adult: Math.max(prevCount.adult - 1, 0),
                    }))
                  }
                />
                {seatCount.adult}
                <Plus
                  className="font-bold mx-3"
                  onClick={() =>
                    setSeatCount((prevCount) => ({
                      ...prevCount,
                      adult: Math.max(prevCount.adult + 1, 0),
                    }))
                  }
                />{" "}
              </div>
            </div>
            <div className="child mt-3 d-flex justify-content-between align-items-center">
              <p>Child</p>
              <div>
                <Dash
                  className="font-bold mx-3"
                  onClick={() =>
                    setSeatCount((prevCount) => ({
                      ...prevCount,
                      child: Math.max(prevCount.child - 1, 0),
                    }))
                  }
                />{" "}
                {seatCount.child}{" "}
                <Plus
                  className="font-bold mx-3"
                  onClick={() =>
                    setSeatCount((prevCount) => ({
                      ...prevCount,
                      child: Math.max(prevCount.child + 1, 0),
                    }))
                  }
                />{" "}
              </div>
            </div>
            <div className="babies mt-3 d-flex justify-content-between align-items-center">
              <p>Babies</p>
              <div>
                <Dash
                  className="font-bold mx-3"
                  onClick={() =>
                    setSeatCount((prevCount) => ({
                      ...prevCount,
                      babies: Math.max(prevCount.babies - 1, 0),
                    }))
                  }
                />{" "}
                {seatCount.babies}{" "}
                <Plus
                  className="font-bold mx-3"
                  onClick={() =>
                    setSeatCount((prevCount) => ({
                      ...prevCount,
                      babies: Math.max(prevCount.babies + 1, 0),
                    }))
                  }
                />{" "}
              </div>
            </div>
          </div>
          <button
            onClick={handleSearch}
            className="border-0 py-3 px-3 w-100 primary-btn rounded-1 mt-3"
          >
            Search
          </button>
        </div>
        <div className="col-md-8">
          <div className="row mb-3">
            <h4>Letest Update</h4>

            {homesData &&
              homesData
                .filter((newHome) => newHome.id > 3)
                .map((home) => {
                  return (
                    <div key={home.id} className="col-md-3 d-flex">
                      <div
                        onClick={() => handleGetHotel(home.id)}
                        className="home-box hotels d-flex flex-column"
                      >
                        <img
                          className="w-100 h-100"
                          src={require(`../../images/${home.img}`)}
                          alt="Home"
                        />
                        <p className="my-3">{home.location}</p>
                        <h6 className="text-uppercase">{home.name}</h6>
                        <p>${home.cost}</p>
                        <div className="d-flex">
                          <StarFill className="font-bold me-3" />
                          <p>{home.review}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          <div className="row">
            <h4>Homes</h4>
            {homesData &&
              homesData
                .filter((newHome) => newHome.id < 4)
                .map((home) => {
                  return (
                    <div key={home.id} className="col-md-4 d-flex">
                      <div
                        onClick={() => handleGetHotel(home.id)}
                        className="home-box d-flex flex-column hotels"
                      >
                        <img
                          className="w-100 h-100"
                          src={require(`../../images/${home.img}`)}
                          alt="Home"
                        />
                        <p className="my-3">{home.location}</p>
                        <h6 className="text-uppercase">{home.name}</h6>
                        <p>{home.cost}</p>
                        <div className="d-flex">
                          <StarFill className="font-bold me-3" />
                          <p>{home.review}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
