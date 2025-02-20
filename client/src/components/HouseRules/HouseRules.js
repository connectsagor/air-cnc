import React from "react";
import { Ban, Bicycle, Feather, SignStop } from "react-bootstrap-icons";

const HouseRules = ({ nextStep }) => {
  return (
    <div>
      <h3 className="mt-3">Review House Rules</h3>

      <p className="mt-2">3 Nights in Dhaka</p>

      <div className="d-flex justify-content-start gap-3 align-items-center">
        <div className="check-in d-flex justify-content-center align-items-center">
          <p className="bg-another p-2 rounded-5 me-2"> 17 Apr</p>
          <p>After 11PM</p>
        </div>
        <div className="check-out d-flex justify-content-center align-items-center">
          <p className="bg-another p-2 rounded-4 me-2"> 27 Apr</p>
          <p>After 11AM</p>
        </div>
      </div>

      <p className="mt-4 border-bottom pb-3">
        Self check-in with building staff
      </p>

      <h6 className="mb-3">Things to keep in mind</h6>

      <div className="things d-flex gap-2 mt-2">
        <Bicycle />
        <p className="font-small m-0">Suitable for children</p>
      </div>
      <div className="things d-flex gap-2 mt-2">
        <Feather />
        <p className="font-small m-0">Pets allowed</p>
      </div>
      <div className="things d-flex gap-2 mt-2">
        <Ban />
        <p className="font-small m-0">No party or events</p>
      </div>
      <div className="things d-flex gap-2 mt-2">
        <SignStop />
        <p className="font-small m-0">Suitable for children and infants</p>
      </div>

      <button
        className="primary-btn py-2 px-4 border-0 mt-4"
        onClick={nextStep}
      >
        Continue
      </button>
    </div>
  );
};

export default HouseRules;
