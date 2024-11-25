import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div className="mt-4 text-center">
      <h2 className="">404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <div
        className="icon-link icon-link-hover text-primary link-underline-primary pointer"
        style={{"--bs-link-hover-color-rgb":'25, 135, 84'}}
        role="button"
        onClick={goBack}
      >
        <svg className="bi" aria-hidden="true">
          <use xlinkHref="#arrow-left"></use>
        </svg>
        Go Back
      </div>
    </div>
  );
};

export default NotFound;
