import React from "react";

const WhoComing = ({ nextStep }) => {
  return (
    <div className="my-4">
      <h6 className="mb-4">Traveling for work?</h6>
      <p>Say hello to your host</p>
      <p>Let Sagor know a little about yourself and why you're comming.</p>

      <textarea className="w-50" name="message" id="message"></textarea>

      <div className="d-flex justify-content-start">
        <button
          className="primary-btn py-2 px-4 border-0 mt-4"
          onClick={nextStep}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default WhoComing;
