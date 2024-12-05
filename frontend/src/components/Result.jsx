import React, { useEffect } from "react";
import { useRemedyStore } from "../store/remedy";
import Card from "./Card";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

function Result() {
  const { fetchRemedies, remedies, filter, loading } = useRemedyStore();
  let noFilteredRemedy = true;

  useEffect(() => {
    fetchRemedies();
  }, []);

  return (
    <>
      <h1 className="text-center mt-4">Natural Cure Remedies</h1>
      <div className="text-center mb-4 fs-5">
        <span style={{ color: "#fa8128" }}>Slow to act,</span>
        <span className="text-success"> Sure to heal.</span>
      </div>
      {loading && <Loading />}
      {remedies.length > 0 ? (
        <div className="row">
          {remedies.map((remedy) => {
            // returning empty for remedies that doesn't match filter
            if (filter && remedy.part !== filter) {
              return;
            } else {
              noFilteredRemedy = false; //update noFilteredRemedy for fresh reload
            }

            // Create a unique ID for each modal using the remedy's `_id`
            const remedyId = remedy._id?.$oid || remedy._id; // Use $oid if it exists, else fallback to _id
            const modalId = `modal-${remedyId}`; // Unique modal ID
            return <Card key={remedyId} remedy={remedy} modalId={modalId} />;
          })}
          {filter && noFilteredRemedy && (
            <div className="fs-5 text-center">
              No remedies found for <b>{filter}</b>. Try Adding Remedies.
              <Link
                className="btn btn-success px-3 py-2 my-2 mx-auto d-block"
                to={"/add"}
                style={{width:'fit-content'}}
              >
                <IoAddOutline size={'2em'} /> Add Your Remedy
              </Link>
            </div>
          )}
        </div>
      ) : (
        !loading && (
          <div className="fs-5 text-center fw-semibold">
            No remedies to show. Please add Remedies.
          </div>
        )
      )}
    </>
  );
}

export default Result;
