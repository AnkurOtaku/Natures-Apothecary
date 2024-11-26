import React, { useEffect } from "react";
import { useRemedyStore } from "../store/remedy";
import Card from "./Card";

function Result() {
  const { fetchRemedies, remedies, filter } = useRemedyStore();

  useEffect(() => {
      fetchRemedies();
  }, [fetchRemedies]);

  return (
    <div className="container">
      <h1 className="text-center my-4">Natural Cure Remedies</h1>
      {remedies.length > 0 ? (
        <div className="row">
          {remedies.map((remedy) => {
            if (filter && remedy.part !== filter) {
              return;
            }
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
