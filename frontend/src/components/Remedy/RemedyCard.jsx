import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { MdDelete, MdEdit, MdRestaurantMenu } from "react-icons/md";
import { SiPaperlessngx } from "react-icons/si";
import { ImWarning } from "react-icons/im";
import { FaRepeat } from "react-icons/fa6";
import { FcExpired } from "react-icons/fc";
import { FaChild } from "react-icons/fa";

import { useRemedyStore } from "../../store/remedy";
import { toast } from "react-toastify";
import "../CustomToastify.css";
import "../Card.css";
import targetArea from "../targetArea.js";
import defaultImage from "/defaul-remedy-image.jpg";

function RemedyCard({ remedy, modalId }) {
  const location = useLocation();
  const { darkTheme, deleteRemedy } = useRemedyStore();
  const [image, setImage] = useState(defaultImage);

  const handleDeleteRemedy = async (rid) => {
    const { status, message } = await deleteRemedy(rid);
    if (status) {
      toast.success("Remedy Deleted Successfully", {
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
            alt={remedy.part || "remedy"}
            style={{ objectFit: "cover", height: "200px" }}
            onLoad={() => {
              setImage(findImage(remedy.part));
            }}
            onError={() => {
              setImage(defaultImage); // Set the image to the default image on error
            }}
          />
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 rounded"></div>
          <div className="card-img-overlay">
            <div className="card-body p-0">
              <h5 className="card-title text-capitalize">{remedy.name}</h5>
              {remedy.ingredients && (
                <p className="card-text">{remedy.ingredients.join(", ")}</p>
              )}

              {/* Unique modal for each remedy */}
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
                        {remedy.name}{" "}
                        <span className="fs-6 text-grey text-info">
                          / {remedy.part}
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
                      {remedy.ingredients[0].length > 0 && (
                        <div className="card-text fw-semibold text-capitalize mb-2">
                          <SiPaperlessngx size={"1.5em"} color="brown" />{" "}
                          Ingredients :{" "}
                          <p className="fw-normal my-0">
                            {remedy.ingredients.join(", ")}
                          </p>
                        </div>
                      )}

                      {/* Recipe */}
                      <div className="fw-semibold text-capitalize mb-2">
                        <MdRestaurantMenu size={"1.5em"} color="green" /> Recipe
                        :{" "}
                        {remedy.recipe.map((step, index) => {
                          return (
                            <p key={index} className="my-0">
                              {index + 1} :{" "}
                              <span className="fw-normal">{step}</span>
                            </p>
                          );
                        })}
                      </div>

                      {/* Caution */}
                      {remedy.caution[0].length > 0 && (
                        <div className="fw-semibold text-capitalize mb-2">
                          <ImWarning
                            size={"1.2em"}
                            color={`${darkTheme ? "yellow" : "black"}`}
                          />{" "}
                          Caution :{" "}
                          {remedy.caution.map((step, index) => {
                            return (
                              <p key={index} className="my-0">
                                {index + 1} :{" "}
                                <span className="fw-normal">{step}</span>
                              </p>
                            );
                          })}
                        </div>
                      )}

                      {/* Expiry */}
                      <div className="fw-semibold text-capitalize mb-2">
                        <FcExpired size={"1.3em"} /> Expiry :{" "}
                        <span className="fw-normal">
                          {remedy.expiry == 99
                            ? "Never"
                            : `${remedy.expiry} days`}
                        </span>
                      </div>

                      {/* Dosage */}
                      <div className="fw-semibold text-capitalize">
                        <FaRepeat /> :{" "}
                        <span className="fw-normal">
                          {remedy.dosage ? remedy.dosage : "undefined"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Edit and Delete Buttons */}
        {location.pathname == "/remedy/delete" ? (
          <>
            <div
              type="button"
              className="text-danger p-2 position-absolute top-0 end-0"
              data-bs-dismiss="offcanvasDark"
              aria-label="Close"
              onClick={() => {
                handleDeleteRemedy(remedy._id);
              }}
            >
              <MdDelete size={"1.3em"} />
            </div>
            {remedy.forKids == "yes" && (
              <FaChild
                size={"2.2em"}
                className="text-success p-2 position-absolute bottom-0 end-0"
              />
            )}
          </>
        ) : (
          <>
            <Link
              type="button"
              className="text-info p-2 position-absolute top-0 end-0"
              data-bs-dismiss="offcanvasDark"
              aria-label="Update"
              to="/remedy/update"
              state={{ remedy }}
            >
              <MdEdit size={"1.3em"} />
            </Link>
            {remedy.forKids == "yes" && (
              <>
                <div
                  className="position-absolute bottom-0 end-0 d-flex justify-content-center align-items-center z-1"
                  style={{ borderRadius: "20%" }}
                  data-bs-toggle="collapse"
                  data-bs-target={`#kids-${modalId}`}
                  aria-expanded="false"
                  aria-controls={`kids-${modalId}`}
                >
                  <FaChild
                    size="2.2em"
                    className="text-success p-2 rounded-circle"
                  />
                </div>

                <div className="position-absolute bottom-0 end-0 collapse-horizontal collapse" id={`kids-${modalId}`}>
                  <div
                    className="card card-body text-success"
                    style={{ width: "max-content", padding: "6px" }}
                  >
                    Kids Friendly &nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default RemedyCard;
