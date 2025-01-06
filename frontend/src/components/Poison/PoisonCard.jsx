import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdDelete, MdEdit, MdRestaurantMenu } from "react-icons/md";
import { SiPaperlessngx } from "react-icons/si";

import { useRemedyStore } from "../../store/remedy.js";
import { toast } from "react-toastify";
import "../CustomToastify.css";
import targetArea from "../targetArea.js";
import defaultImage from "/defaul-remedy-image.jpg";

function PoisonCard({ poison, modalId }) {
  const location = useLocation();
  const { darkTheme, deletePoison } = useRemedyStore();
  const [image, setImage] = useState(defaultImage);

  const handleDeletePoison = async (rid) => {
    const { status, message } = await deletePoison(rid);
    if (status) {
      toast.success("Poison Deleted Successfully", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    } else {
      toast.error(message || "Something went wrong. Please try again.", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
    }
  };

  function findImage(area) {
    const imageArea = targetArea.find((part) => part.area === area);
    return imageArea?.image || defaultImage;
  }

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div className="card text-white rounded-3">
        <div
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`} // Link button to unique modal ID
        >
          <img
            src={image}
            className="card-img-top img-fluid rounded-3"
            alt={poison.part || "poison"}
            style={{ objectFit: "cover", height: "200px" }}
            onLoad={() => {
              setImage(findImage(poison.part));
            }}
            onError={() => {
              setImage(defaultImage); // Set the image to the default image on error
            }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 rounded"></div>
          <div className="card-img-overlay">
            <div className="card-body p-0">
              <h5 className="card-title text-capitalize">{poison.name}</h5>
              {poison.ingredients && (
                <p className="card-text">{poison.ingredients.join(", ")}</p>
              )}

              {/* Unique modal for each poison */}
              <div
                className="modal fade pe-0"
                id={modalId}
                tabIndex={-1}
                aria-labelledby={`${modalId}Label`}
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div
                    className={`modal-content ${
                      darkTheme ? "text-light bg-dark" : "text-dark bg-light"
                    }`}
                  >
                    {/* Header */}
                    <div className="modal-header">
                      <h1
                        className="modal-title fs-4 fw-semibold text-capitalize"
                        id={`${modalId}Label`}
                      >
                        {poison.name}{" "}
                        <span className="fs-6 text-grey text-info">
                          / {poison.part}
                        </span>
                      </h1>
                      <button
                        type="button"
                        className={`btn-close ${darkTheme ? "bg-light" : ""}`}
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                      {/* Ingredients */}
                      {poison.ingredients[0].length > 0 && (
                        <div className="card-text fw-semibold text-capitalize mb-2">
                          <SiPaperlessngx size={"1.5em"} color="brown" />{" "}
                          Ingredients :{" "}
                          <p className="fw-normal my-0">
                            {poison.ingredients.join(", ")}
                          </p>
                        </div>
                      )}

                      {/* Description */}
                      <div className="fw-semibold text-capitalize mb-2">
                        <MdRestaurantMenu size={"1.5em"} color="green" /> Description
                        :{" "}
                        {poison.description.map((step, index) => {
                          return (
                            <p key={index} className="my-0">
                              {index + 1} :{" "}
                              <span className="fw-normal">{step}</span>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit and Delete Buttons */}
        {location.pathname == "/poison/delete" ? (
          <>
            <div
              type="button"
              className="text-danger p-2 position-absolute top-0 end-0"
              data-bs-dismiss="offcanvasDark"
              aria-label="Close"
              onClick={() => {
                handleDeletePoison(poison._id);
              }}
            >
              <MdDelete size={"1.3em"} />
            </div>
          </>
        ) : (
          <>
            <Link
              type="button"
              className="text-info p-2 position-absolute top-0 end-0"
              data-bs-dismiss="offcanvasDark"
              aria-label="Update"
              to="/poison/update"
              state={{ poison }}
            >
              <MdEdit size={"1.3em"} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default PoisonCard;
