import React, { useEffect } from "react";
import { useRemedyStore } from "../store/remedy";
import BoosterCard from "./BoosterCard";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

function Result() {
  const { fetchBoosters, boosters, filter, loading } = useRemedyStore();
  let noFilteredBooster = true;

  useEffect(() => {
    fetchBoosters();
    
  }, []);

  return (
    <>
      <h1 className="text-center mt-4">Natural Cure Boosters</h1>
      <div className="text-center mb-4 fs-5">
        <span style={{ color: "#fa8128" }}>Slow to act,</span>
        <span className="text-success"> Sure to heal.</span>
      </div>
      {loading && <Loading />}
      {boosters.length > 0 ? (
        <div className="row">
          {boosters.map((booster) => {
            // returning empty for boosters that doesn't match filter
            if (filter && booster.part !== filter) {
              return;
            } else {
              noFilteredBooster = false; //update noFilteredBooster for fresh reload
            }

            // Create a unique ID for each modal using the booster's `_id`
            const boosterId = booster._id?.$oid || booster._id; // Use $oid if it exists, else fallback to _id
            const modalId = `modal-${boosterId}`; // Unique modal ID
            return <BoosterCard key={boosterId} booster={booster} modalId={modalId} />;
          })}
          {filter && noFilteredBooster && (
            <div className="fs-5 text-center">
              No boosters found for <b>{filter}</b>. Try Adding Boosters.
              <Link
                className="btn btn-success px-3 py-2 my-2 mx-auto d-block"
                to={"/add"}
                style={{ width: "fit-content" }}
              >
                <IoAddOutline size={"2em"} /> Add Your Booster
              </Link>
            </div>
          )}
        </div>
      ) : (
        !loading && (
          <div className="fs-5 text-center fw-semibold">
            No boosters to show. Please add Boosters.
          </div>
        )
      )}
    </>
  );
}

export default Result;
