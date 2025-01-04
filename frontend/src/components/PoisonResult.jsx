import React, { useEffect } from "react";
import { useRemedyStore } from "../store/remedy";
import PoisonCard from "./PoisonCard";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { IoAddOutline } from "react-icons/io5";

function Result() {
  const { fetchPoisons, poisons, filter, loading } = useRemedyStore();
  let noFilteredPoison = true;

  useEffect(() => {
    fetchPoisons();
    
  }, []);

  return (
    <>
      <h1 className="text-center mt-4">Natural Poisons</h1>
      {loading && <Loading />}
      {poisons.length > 0 ? (
        <div className="row">
          {poisons.map((poison) => {
            // returning empty for poisons that doesn't match filter
            if (filter && poison.part !== filter) {
              return;
            } else {
              noFilteredPoison = false; //update noFilteredPoison for fresh reload
            }

            // Create a unique ID for each modal using the poison's `_id`
            const poisonId = poison._id?.$oid || poison._id; // Use $oid if it exists, else fallback to _id
            const modalId = `modal-${poisonId}`; // Unique modal ID
            return <PoisonCard key={poisonId} poison={poison} modalId={modalId} />;
          })}
          {filter && noFilteredPoison && (
            <div className="fs-5 text-center">
              No poisons found for <b>{filter}</b>. Try Adding Poisons.
              <Link
                className="btn btn-success px-3 py-2 my-2 mx-auto d-block"
                to={"/add"}
                style={{ width: "fit-content" }}
              >
                <IoAddOutline size={"2em"} /> Add Your Poison
              </Link>
            </div>
          )}
        </div>
      ) : (
        !loading && (
          <div className="fs-5 text-center fw-semibold">
            No poisons to show. Please add Poisons.
          </div>
        )
      )}
    </>
  );
}

export default Result;
