import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import {
  ArrowDownShort,
  ArrowRight,
  ChevronRight,
  StarFill,
} from "react-bootstrap-icons";
import HouseRules from "../HouseRules/HouseRules";
import WhoComing from "../WhoComing/WhoComing";

const HouseBooking = () => {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    fetch("http://localhost:5000/selected-hotels")
      .then((res) => res.json())
      .then((result) => {
        setSelectedHotel(result.data);
      });
  }, []);
  return (
    <>
      <Navbar />

      <div className="container my-3">
        <div className="row">
          <div className="active-state d-flex gap-3">
            <h6 className={`font-semibold ${step === 1 ? "" : "text-muted"}`}>
              1. Review House Rules <ChevronRight />
            </h6>
            <h6 className={`font-semibold ${step === 2 ? "" : "text-muted"}`}>
              2. Who's Coming? <ChevronRight />
            </h6>
            <h6 className={`font-semibold ${step === 3 ? "" : "text-muted"}`}>
              3. Confirm and pay <ChevronRight />
            </h6>
          </div>
          <div className="col-md-7">
            {step === 1 && (
              <>
                <HouseRules nextStep={nextStep} />
              </>
            )}

            {step === 2 && (
              <>
                <WhoComing nextStep={nextStep} />
              </>
            )}

            {step === 3 && <></>}
          </div>
          <div className="col-md-5">
            {selectedHotel &&
              selectedHotel.map((hotel) => {
                return (
                  <div
                    className="selected-items shadow-lg p-4 rounded-2"
                    key={hotel.id}
                  >
                    <div className="row">
                      <div className="col-md-8">
                        <h5> {hotel.name}</h5>
                        <p className="mt-4">
                          <span className="text-warning me-2">
                            <StarFill />{" "}
                          </span>
                          {hotel.review}
                        </p>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="w-100"
                          src={require(`../../images/${hotel.img}`)}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">Dates</label>

                      <div className="date d-flex justify-content-around align-items-center border py-2 px-2 mt-2">
                        <div className="from">
                          <p className="m-0">11/20/25</p>
                        </div>
                        <div>
                          <ArrowRight />
                        </div>
                        <div className="to">
                          <p className="m-0">21/20/25</p>
                        </div>
                      </div>
                    </div>

                    <div className="form-group mt-3">
                      <label htmlFor="date">Guest</label>

                      <div className="guest d-flex justify-content-between align-items-center border py-2 px-2 mt-2">
                        <p className="m-0">3 Guest</p>{" "}
                        <span>
                          {" "}
                          <ArrowDownShort />
                        </span>
                      </div>
                    </div>

                    <div className="form-group mt-2">
                      <div className="border-bottom py-2 px-2 mt-2 d-flex justify-content-between align-items-center">
                        <p>Cleaning fee:</p>
                        <p>$10</p>
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <div className="border-bottom py-2 px-2 mt-2 d-flex justify-content-between align-items-center">
                        <p>Service Charge:</p>
                        <p>$10</p>
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <div className="py-2 px-2 mt-2 d-flex justify-content-between align-items-center">
                        <p>Total:</p>
                        <p>$10</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseBooking;
