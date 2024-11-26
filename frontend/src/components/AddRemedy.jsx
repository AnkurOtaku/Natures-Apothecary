import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { IoIosCreate } from "react-icons/io";
import { BsFillInfoCircleFill } from "react-icons/bs";
import targetArea from "./targetArea.js";
import { useRemedyStore } from "../store/remedy.js";
import { toast } from "react-toastify";
import "./CustomToastify.css";

function AddRemedy() {
  const [selectedPart, setSelectedPart] = useState(null);

  const { createRemedy, updateRemedy } = useRemedyStore();

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
      const remedy = location.state?.remedy;
      document.getElementById("remedyName").value = remedy.name;
      setSelectedPart(remedy.part);
      document.getElementById("ingredients").value =
        remedy.ingredients.join(", ");
      document.getElementById("expiry").value = remedy.expiry;
      document.getElementById("recipe").value = remedy.recipe.join("\n");
      document.getElementById("caution").value = remedy.caution.join("\n");
      document
        .querySelectorAll("input[name='forKids']")
        .forEach((input) => (input.checked = remedy.forKids));
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
      document.getElementById("remedyName").value = "";
      setSelectedPart("");
      document.getElementById("ingredients").value = "";
      document.getElementById("expiry").value = "";
      document.getElementById("recipe").value = "";
      document.getElementById("caution").value = "";
      document
        .querySelectorAll("input[name='forKids']")
        .forEach((input) => (input.checked = false));
      navigate("/");
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
    location.state ? handleUpdateRemedy() : handleAddRemedy();
  }

  const handleAddRemedy = async () => {
    const newRemedy = {
      name: document.getElementById("remedyName").value,
      part: selectedPart,
      ingredients: document
        .getElementById("ingredients")
        .value.split(",")
        .map((item) => item.trim()), // Ingredients comma-separated
      expiry: document.getElementById("expiry").value,
      forKids:
        document.querySelector("input[name='forKids']:checked")?.value || "",
      recipe: document.getElementById("recipe").value
        .split("\n")
        .map((step) => step.trim()), // Recipe steps newline-separated
      caution: document.getElementById("caution")
        .value?.split("\n")
        .map((step) => step.trim()), // Caution steps newline-separated
    };

    if (newRemedy.expiry < 0 || newRemedy.expiry > 99) {
      toast.error("Please Enter Valid Expiry", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
      return;
    }

    const { status, message } = await createRemedy(newRemedy); // Zustand call
    if (!status || !message) {
      console.error("Failed to update remedy. Response:", response);
      return;
    }

    toastAndResetValue(status, "Remedy Added Succesfully");
  };

  const handleUpdateRemedy = async () => {
    const updatedRemedy = {
      name: document.getElementById("remedyName").value,
      part: selectedPart,
      ingredients: document
        .getElementById("ingredients")
        .value.split(",")
        .map((item) => item.trim()), // Ingredients comma-separated
      expiry: document.getElementById("expiry").value,
      forKids:
        document.querySelector("input[name='forKids']:checked")?.value || "",
      recipe: document
        .getElementById("recipe")
        .value.split("\n")
        .map((step) => step.trim()), // Recipe steps newline-separated
      caution: document
        .getElementById("caution")
        .value?.split("\n")
        .map((step) => step.trim()), // Caution steps newline-separated
    };

    if (updatedRemedy.expiry < 0) {
      toast.error("Please Enter Valid Expiry", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });
      return;
    }

    const { status, message } = await updateRemedy(
      location.state.remedy._id,
      updatedRemedy
    ); // Zustand call
    if (!status || !message) {
      console.error("Failed to update remedy. Received no response.");
      return;
    }

    toastAndResetValue(status, "Remedy Updated Successfully");
  };

  return (
    <>
      <h2 className="my-4 mx-auto">
        Enter Recipe Info <IoIosCreate />
      </h2>
      <div className="row g-3">
        {/* Name */}
        <div className="col-md-6">
          <label htmlFor="remedyName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control shadow-none"
            id="remedyName"
            required
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
            onChange={(e) => {
              setSelectedPart(e.target.value);
            }}
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
          ></textarea>
        </div>

        {/* Expiry */}
        <div className="col-md-4">
          <label htmlFor="expiry" className="form-label">
            Expiry (in days){" "}
            <span
              className="d-inline-block"
              tabIndex="0"
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-content="Value must be greater than 0. Use 99 if remedy never expires."
            >
              <button
                className="btn btn-secondary p-1"
                type="button"
                disabled=""
              >
                <BsFillInfoCircleFill size={"1em"} />
              </button>
            </span>
            {/* </button> */}
          </label>
          <input
            type="number"
            className="form-control shadow-none"
            id="expiry"
            min="0"
            max="60"
            required
          />
        </div>

        {/* Recipe */}
        <div className="col-md-12">
          <label htmlFor="recipe" className="form-label">
            Recipe
          </label>
          <textarea
            className="form-control shadow-none"
            id="recipe"
            placeholder={`add ingredient 1\nadd ingredient 2\nmix well`}
            rows={4}
            required
          ></textarea>
        </div>

        {/* Caution */}
        <div className="col-md-12">
          <label htmlFor="caution" className="form-label">
            Caution (optional)
          </label>
          <textarea
            className="form-control shadow-none"
            id="caution"
            placeholder={`Consume it hot\nKeep it in air tight container`}
            rows={4}
            required
          ></textarea>
        </div>

        {/* For Kids */}
        <div className="col-md-6">
          <label className="form-label mx-2">For Kids under 10?</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input shadow-none"
              type="radio"
              name="forKids"
              id="forKidsYes"
              value="yes"
            />
            <label className="form-check-label" htmlFor="forKidsYes">
              Yes
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="forKids"
              id="forKidsNo"
              value="no"
            />
            <label className="form-check-label" htmlFor="forKidsNo">
              No
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="col-12">
          <button className="btn btn-success" onClick={handleSubmit}>
            {location.state ? "Update" : "Add Remedy"}
          </button>
        </div>
      </div>
    </>
  );
}

export default AddRemedy;
