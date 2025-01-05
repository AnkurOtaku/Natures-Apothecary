import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { IoIosCreate } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import targetArea from "./targetArea.js";
import { useRemedyStore } from "../store/remedy.js";
import { toast } from "react-toastify";
import "./CustomToastify.css";

function AddPoison() {
  const [selectedPart, setSelectedPart] = useState("");

  const { createPoison, updatePoison, loading } = useRemedyStore();

  let navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Initialize all popovers after component mounts
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new bootstrap.Popover(popoverTriggerEl); // Initialize popover
    });

    if (location.state) {
      const poison = location.state?.poison;
      document.getElementById("name").value = poison.name;
      setSelectedPart(poison.part);
      document.getElementById("ingredients").value =
        poison.ingredients.join(", ");
      document.getElementById("description").value = poison.description.join("\n");
    }

  }, []);

  function toastAndResetValue(status, message) {
    // toast and reset values
    if (status) {
      toast.success(message, {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });

      // Reset all fields
      document.getElementById("name").value = "";
      setSelectedPart("");
      document.getElementById("ingredients").value = "";
      document.getElementById("description").value = "";
      navigate("/poison");
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
  }

  function handleSubmit() {
    location.state ? handleUpdatePoison() : handleAddPoison();
  }

  const handleAddPoison = async () => {
    const newPoison = {
      name: document.getElementById("name").value,
      part: selectedPart,
      ingredients: document
        .getElementById("ingredients")
        .value.split(",")
        .map((item) => item.trim()), // Ingredients comma-separated
      description: document
        .getElementById("description")
        .value.split("\n")
        .map((step) => step.trim()), // Poison steps newline-separated
    };

    const { status, message } = await createPoison(newPoison); // Zustand call
    if (!status || !message) {
      toastAndResetValue(status, message);
      return;
    }

    toastAndResetValue(status, "Poison Added Succesfully");
  };

  const handleUpdatePoison = async () => {
    const updatedPoison = {
      name: document.getElementById("name").value,
      part: selectedPart,
      ingredients: document
        .getElementById("ingredients")
        .value.split(",")
        .map((item) => item.trim()), // Ingredients comma-separated
      description: document
        .getElementById("description")
        .value.split("\n")
        .map((step) => step.trim()), // Poison steps newline-separated
    };

    const { status, message } = await updatePoison(
      location.state.poison._id,
      updatedPoison
    ); // Zustand call
    if (!status || !message) {
      toastAndResetValue(status, message);
      return;
    }

    toastAndResetValue(status, "Poison Updated Successfully");
  };

  return (
    <>
      <h2 className="my-4 mx-auto">
        Enter Poison Info <IoIosCreate />
      </h2>
      <div className="row g-3">
        {/* Name */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Causes
          </label>
          <input
            type="text"
            className="form-control shadow-none"
            id="name"
            required
            disabled={loading}
          />
        </div>

        {/* Target Area */}
        <div className="col-md-6">
          <label htmlFor="targetArea" className="form-label">
            Target Area
          </label>
          <select
            className="form-select shadow-none"
            id="targetArea"
            required
            value={selectedPart}
            onChange={(e) => {
              setSelectedPart(e.target.value);
            }}
            disabled={loading}
          >
            <option value="">Select an area</option>
            {targetArea.map((areas, index) => (
              <option key={index} value={areas.area}>
                {areas.area}
              </option>
            ))}
          </select>
        </div>

        {/* Ingredients */}
        <div className="col-md-6">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <textarea
            className="form-control shadow-none"
            id="ingredients"
            placeholder={`1, 2, 3, 4 ,....`}
            rows={2}
            disabled={loading}
          ></textarea>
        </div>

        {/* Poison */}
        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Poison
          </label>
          <textarea
            className="form-control shadow-none"
            id="description"
            placeholder={`add ingredient 1\nadd ingredient 2\nmix well`}
            rows={4}
            required
            disabled={loading}
          ></textarea>
        </div>

        {/* Submit */}
        <div className="col-12 mb-4">
          <button
            className="btn btn-success"
            onClick={handleSubmit}
            disabled={loading}
          >
            {location.state ? "Update" : "Add Poison"}
            {loading && (
              <span
                className="spinner-border spinner-border-sm ms-2"
                aria-hidden="true"
              ></span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddPoison;
