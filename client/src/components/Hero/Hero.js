import React from "react";
import { Dash, Plus, StarFill } from "react-bootstrap-icons";
import "./Hero.css";

const homesData = [
  {
    id: 1,
    name: "A unique cottage",
    location: "New York",
    cost: "$128 per person",
    review: "4.8 (201)",
    img: "room-1.jpg",
  },
  {
    id: 2,
    name: "A beautiful house",
    location: "Dhaka",
    cost: "$108 per person",
    review: "4.7 (261)",
    img: "room-2.jpeg",
  },
  {
    id: 3,
    name: "A Relaxing Place",
    location: "Rajshahi",
    cost: "$100 per person",
    review: "4.8 (255)",
    img: "room-3.jpg",
  },
];

const newHomes = [
  {
    id: 1,
    name: "A Fuest House",
    location: "New York",
    cost: "$118 per person",
    review: "4.7 (101)",
    img: "room-4.jpg",
  },
  {
    id: 2,
    name: "A Merigold House",
    location: "USA",
    cost: "$308 per person",
    review: "4.6 (361)",
    img: "room-5.jpg",
  },
  {
    id: 3,
    name: "A Tour House",
    location: "Dhaka",
    cost: "$60 per person",
    review: "4.7 (55)",
    img: "room-6.jpg",
  },
  {
    id: 4,
    name: "A Scerene House",
    location: "Rajshahi",
    cost: "$80 per person",
    review: "4.8 (25)",
    img: "room-7.jpg",
  },
];
const Hero = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <h5 className="mb-4">Where do you want to go?</h5>

          <div className="form-group d-flex flex-column shadow-lg p-3 rounded-2">
            <label htmlFor="location">Location</label>
            <input
              className="border-0 input-field mt-2"
              type="text"
              name="location"
              id="location"
              placeholder="Add city, landmark or adress"
            />
          </div>
          <div className="mt-2 form-group d-flex gap-3  justify-content-center align-items-center p-2 rounded-2">
            <div className="arrival d-flex flex-column shadow-lg py-3 px-2">
              <label htmlFor="arrival">Arrival</label>
              <input
                className="border-0 input-field mt-1"
                type="date"
                id="arrival"
                name="arrival"
              ></input>
            </div>
            <div className="arrival d-flex flex-column shadow-lg py-3 px-2">
              <label htmlFor="departure">Departure</label>
              <input
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
                <Dash className="font-bold mx-3" /> 2{" "}
                <Plus className="font-bold mx-3" />{" "}
              </div>
            </div>
            <div className="child mt-3 d-flex justify-content-between align-items-center">
              <p>Child</p>
              <div>
                <Dash className="font-bold mx-3" /> 2{" "}
                <Plus className="font-bold mx-3" />{" "}
              </div>
            </div>
            <div className="babies mt-3 d-flex justify-content-between align-items-center">
              <p>Babies</p>
              <div>
                <Dash className="font-bold mx-3" /> 2{" "}
                <Plus className="font-bold mx-3" />{" "}
              </div>
            </div>
          </div>
          <button className="border-0 py-3 px-3 w-100 primary-btn rounded-1 mt-3">
            Search
          </button>
        </div>
        <div className="col-md-8">
          <div className="row mb-3">
            <h4>Letest Update</h4>

            {newHomes.map((home) => {
              return (
                <div key={home.id} className="col-md-3 d-flex">
                  <div className="home-box d-flex flex-column">
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
          <div className="row">
            <h4>Homes</h4>
            {homesData.map((home) => {
              return (
                <div key={home.id} className="col-md-4 d-flex">
                  <div className="home-box d-flex flex-column">
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
