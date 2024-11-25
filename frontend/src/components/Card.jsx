import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRemedyStore } from "../store/remedy";
import { toast } from "react-toastify";
import "./CustomToastify.css";

function Card({ remedy, modalId }) {
  const location = useLocation();
  const { deleteRemedy } = useRemedyStore();

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

  return (
    <div className="col-md-4 col-sm-6 mb-3">
      <div className="card text-white rounded-3">
        <img
          src={remedy.part.image}
          className="card-img-top img-fluid rounded-3"
          alt="remedy"
          style={{ objectFit: "cover", height: "200px" }}
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75 rounded"></div>
        <div className="card-img-overlay">
          <div className="card-body p-0">
            {location.pathname == "/admin" ? (
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
            ) : (
              <Link
                type="button"
                className="text-info bg-info-subtle p-1 position-absolute top-0 end-0 rounded"
                data-bs-dismiss="offcanvasDark"
                aria-label="Update"
                to="/update"
                state={{ remedy }}
              >
                <MdEdit size={"1.3em"} />
              </Link>
            )}
            <h5 className="card-title text-capitalize">{remedy.name}</h5>
            {remedy.ingredients && (
              <p className="card-text">{remedy.ingredients.join(", ")}</p>
            )}
            <button
              type="button"
              className="btn btn-primary position-absolute bottom-0 start-50 translate-middle-x"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`} // Link button to unique modal ID
            >
              <FaEye /> Show Recipe
            </button>

            {/* Unique modal for each remedy */}
            <div
              className="modal fade"
              id={modalId}
              tabIndex={-1}
              aria-labelledby={`${modalId}Label`}
            >
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content text-black">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-4 fw-semibold text-capitalize"
                      id={`${modalId}Label`}
                    >
                      {remedy.name}
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    {remedy.ingredients && (
                      <div className="card-text fw-semibold text-capitalize">
                        Ingredients :{" "}
                        <span className="fw-normal">
                          {remedy.ingredients.join(", ")}
                        </span>
                      </div>
                    )}
                    <div className="fw-semibold text-capitalize">
                      Works For :{" "}
                      <span className="fw-normal">{remedy.part.area}</span>
                    </div>
                    <div className="fw-semibold text-capitalize">
                      Recipe :{" "}
                      {remedy.recipe.map((step, index) => {
                        return (
                          <p key={index}>
                            {index + 1} :{" "}
                            <span className="fw-normal">{step}</span>
                          </p>
                        );
                      })}
                    </div>
                    {remedy.caution.length > 0 && (
                      <div className="fw-semibold text-capitalize">
                        Caution :{" "}
                        {remedy.caution.map((step, index) => {
                          return (
                            <p key={index}>
                              {index + 1} :{" "}
                              <span className="fw-normal">{step}</span>
                            </p>
                          );
                        })}
                      </div>
                    )}
                    <div className="fw-semibold text-capitalize">
                      Expiry :{" "}
                      <span className="fw-normal">{remedy.expiry==99?'Never':`${remedy.expiry} days`}</span>
                    </div>
                    <div className="fw-semibold text-capitalize">
                      {remedy.forKids == "yes"
                        ? "Kids Friendly"
                        : "Not recommended For kids"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
