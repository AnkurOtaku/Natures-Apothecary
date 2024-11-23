import React, { useState } from "react";
import { IoIosCreate } from "react-icons/io";
import target_area from "./target-area.js";
import { useRemedyStore } from "../store/remedy.js";
import { toast } from "react-toastify";
import "./CustomToastify.css";

function AddRemedy() {
  const [ingredientInput, setIngredientInput] = useState("");
  const [recipeInput, setRecipeInput] = useState("");
  const [cautionInput, setCautionInput] = useState("");
  const { createRemedy } = useRemedyStore();
  const [selectedPart, setSelectedPart] = useState(null);

  const handleAddRemedy = async () => {
    const newRemedy = {
      name: document.getElementById("remedyName").value,
      part: selectedPart,
      ingredients: ingredientInput.split(",").map((item) => item.trim()), // Ingredients comma-separated
      expiry: document.getElementById("expiry").value,
      forKids:
        document.querySelector("input[name='forKids']:checked")?.value || "",
      recipe: recipeInput.split("\n").map((step) => step.trim()), // Recipe steps newline-separated
      caution: cautionInput.split("\n").map((step) => step.trim()), // Caution steps newline-separated
    };
    console.log(document.getElementById("targetArea").value);

    const { status, message } = await createRemedy(newRemedy); // Zustand call
    console.log("Status: ", status, "Message: ", message);

    // toast and reset values
    if (status) {
      toast.success("Remedy Added Successfully", {
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
      document.getElementById("targetArea").value = "";
      setIngredientInput("");
      document.getElementById("expiry").value = "";
      setRecipeInput("");
      setCautionInput("");
      document
        .querySelectorAll("input[name='forKids']")
        .forEach((input) => (input.checked = false));
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
              setSelectedPart(JSON.parse(e.target.value)); // Parse the JSON string back to an object
            }}
          >
            <option value="">Select an area</option>
            {target_area.map((areas, index) => (
              <option key={index} value={JSON.stringify(areas)}>
                {areas.area}
              </option>
            ))}
          </select>
        </div>

        {/* Ingredients */}
        <div className="col-md-6">
          <label htmlFor="ingredients" className="form-label">
            Ingredients (Ex: 1, 2, 3, ...)
          </label>
          <textarea
            className="form-control shadow-none"
            id="ingredients"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          ></textarea>
        </div>

        {/* Expiry */}
        <div className="col-md-4">
          <label htmlFor="expiry" className="form-label">
            Expiry (in days)
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
            Recipe (use next line to add steps)
          </label>
          <textarea
            className="form-control shadow-none"
            id="recipe"
            value={recipeInput}
            onChange={(e) => setRecipeInput(e.target.value)}
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
            value={cautionInput}
            onChange={(e) => setCautionInput(e.target.value)}
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
          <button className="btn btn-success" onClick={handleAddRemedy}>
            Add Remedy
          </button>
        </div>
      </div>
    </>
  );
}

export default AddRemedy;
