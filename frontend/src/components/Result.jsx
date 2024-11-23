import React, { useEffect } from "react";
import { useRemedyStore } from "../store/remedy";
import Card from "./Card";

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
            return <Card key={remedyId} remedy={remedy} modalId={modalId} />;
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
