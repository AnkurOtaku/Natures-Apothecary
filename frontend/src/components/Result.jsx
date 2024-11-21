import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { useRemedyStore } from "../store/remedy";

function Result() {
  const { fetchRemedies, remedies } = useRemedyStore();

  useEffect(() => {
    fetchRemedies();
  }, [fetchRemedies]);

  console.log("Remedies : ", remedies);

  const phrases = [
    "Natural Cure Solutions",
    "Wellness Remedies for You",
    "Holistic Healing Finds",
    "Health Boost Remedies",
  ];

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">{getRandomPhrase()}</h1>
      {remedies.length > 0 ? (
        <div className="row">
          {remedies.map((remedy) => {
            // Create a unique ID for each modal using the remedy's `_id`
            const remedyId = remedy._id?.$oid || remedy._id; // Use $oid if it exists, else fallback to _id
            const modalId = `modal-${remedyId}`; // Unique modal ID

            return (
              <div className="col-md-4 col-sm-6 mb-3" key={remedyId}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{remedy.name}</h5>
                    {remedy.ingredients && (
                      <p className="card-text">
                        {remedy.ingredients.join(", ")}
                      </p>
                    )}
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#${modalId}`} // Link button to unique modal ID
                    >
                      <FaEye /> Show Recipe
                    </button>

                    {/* Unique modal for each remedy */}
                    <div
                      className="modal fade"
                      id={modalId} // Unique modal ID
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex={-1}
                      aria-labelledby={`${modalId}Label`} // Use unique aria-labelledby
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id={`${modalId}Label`} // Unique label ID
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
                              <div className="card-text"> Ingredients : {" "}
                                {remedy.ingredients.join(", ")}
                              </div>
                            )}
                            <div>Works For : {remedy.part}</div>
                            <div>
                              Recipe :{" "}
                              {remedy.recipe.map((step, index) => {
                                return (
                                  <p key={index}>
                                    {index + 1} : {step}
                                  </p>
                                );
                              })}
                            </div>
                            {remedy.caution.length>0 && (
                              <div>
                                Caution :{" "}
                                {remedy.caution.map((step, index) => {
                                  return (
                                    <p key={index}>
                                      {index + 1} : {step}
                                    </p>
                                  );
                                })}
                              </div>
                            )}
                            <div>Expiry : {remedy.expiry} days</div>
                            <div> For Kids Under 10 : {remedy.forKids}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="fs-5 text-center fw-semibold">
          No remedies to show. Please add Remedies.
        </div>
      )}
    </div>
  );
}

export default Result;
