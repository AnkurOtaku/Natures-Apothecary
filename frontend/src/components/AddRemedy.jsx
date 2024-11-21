import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import target_area from "./target-area.js";
import { useRemedyStore } from "../store/remedy.js";
import { toast } from "react-toastify";
import "./CustomToastify.css";

function AddRemedy() {
  const [newRemedy, setNewRemedy] = useState({
    name: "",
    part: "",
    ingredients: [],
    expiry: "",
    forKids: "",
    recipe: [""],
    caution: [""],
  });

  const [ingredientInput, setIngredientInput] = useState("");
  const { createRemedy } = useRemedyStore();

  const addIngredient = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (ingredientInput.trim() !== "") {
        setNewRemedy((prevState) => ({
          ...prevState,
          ingredients: [...prevState.ingredients, ingredientInput],
        }));
        setIngredientInput("");
      }
    }
  };

  const removeIngredient = (index) => {
    setNewRemedy((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.filter((_, i) => i !== index),
    }));
  };

  const addRecipeStep = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setNewRemedy((prevState) => ({
        ...prevState,
        recipe: [...prevState.recipe, ""],
      }));
    }
  };

  const updateRecipeStep = (index, value) => {
    const updatedRecipe = [...newRemedy.recipe];
    updatedRecipe[index] = value;
    setNewRemedy({ ...newRemedy, recipe: updatedRecipe });
  };

  const removeRecipeStep = (index) => {
    setNewRemedy((prevState) => ({
      ...prevState,
      recipe: prevState.recipe.filter((_, i) => i !== index),
    }));
  };

  const addCautionStep = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setNewRemedy((prevState) => ({
        ...prevState,
        caution: [...prevState.caution, ""],
      }));
    }
  };

  const updateCautionStep = (index, value) => {
    const updatedCaution = [...newRemedy.caution];
    updatedCaution[index] = value;
    setNewRemedy({ ...newRemedy, caution: updatedCaution });
  };

  const removeCautionStep = (index) => {
    setNewRemedy((prevState) => ({
      ...prevState,
      caution: prevState.caution.filter((_, i) => i !== index),
    }));
  };

  const handleAddRemedy = async (event) => {
    event.preventDefault();

    const { status, message } = await createRemedy(newRemedy); // Zustand call
    console.log("Status: ", status, "Message: ", message);

    if (status) {
      toast.success("Remedy Added Successfully", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 3000, // Closes after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
      });

      // Reset form fields
      setNewRemedy({
        name: "",
        part: "",
        ingredients: [],
        expiry: "",
        forKids: "",
        recipe: [""],
        caution: [""],
      });
    } else {
      toast.error(message || "Something went wrong. Please try again.", {
        className: "toastify-container",
        bodyClassName: "toastify-container",
        position: "bottom-center",
        autoClose: 3000, // Closes after 3 seconds
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
      <form className="row g-3" onSubmit={handleAddRemedy}>
        {/* name */}
        <div className="col-md-6">
          <label htmlFor="remedyName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control shadow-none"
            id="remedyName"
            required
            value={newRemedy.name}
            onChange={(e) =>
              setNewRemedy({ ...newRemedy, name: e.target.value })
            }
          />
        </div>

        {/* target area */}
        <div className="col-md-6">
          <label htmlFor="targetArea" className="form-label">
            Target Area
          </label>
          <select
            className="form-select shadow-none"
            id="targetArea"
            required
            value={newRemedy.part}
            onChange={(e) =>
              setNewRemedy({ ...newRemedy, part: e.target.value })
            }
          >
            {target_area.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* ingredients */}
        <div className="col-md-6">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <div className="input-group">
            <input
              type="text"
              className="form-control shadow-none"
              id="ingredients"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyDown={addIngredient}
            />
          </div>
          <div>
            {newRemedy.ingredients.map((ingredient, index) => (
              <span key={index} className="badge bg-secondary m-1">
                {ingredient}
                <FaTimes
                  onClick={() => removeIngredient(index)}
                  style={{ cursor: "pointer", marginLeft: "5px" }}
                />
              </span>
            ))}
          </div>
        </div>

        {/* expiry */}
        <div className="col-md-4">
          <label htmlFor="expiry" className="form-label">
            Expiry (in days)
          </label>
          <input
            type="number"
            className="form-control shadow-none"
            id="expiry"
            required
            min="0"
            max="60"
            value={newRemedy.expiry}
            onChange={(e) =>
              setNewRemedy({ ...newRemedy, expiry: e.target.value })
            }
          />
        </div>

        {/* recipe */}
        <div className="col-md-12">
          <label className="form-label">Recipe Steps</label>
          {newRemedy.recipe.map((step, index) => (
            <div key={index} className="d-flex align-items-center">
              <span className="me-2">{index + 1}.</span>
              <input
                type="text"
                className="form-control shadow-none border-0 p-1"
                style={{ height: "33px" }}
                value={step}
                required
                onChange={(e) => updateRecipeStep(index, e.target.value)}
                onKeyDown={addRecipeStep}
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-outline-danger ms-2 px-2 py-1"
                  onClick={() => removeRecipeStep(index)}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* caution */}
        <div className="col-md-12">
          <label className="form-label">Caution (optional)</label>
          {newRemedy.caution.map((step, index) => (
            <div key={index} className="d-flex align-items-center mb-1">
              <span className="me-2">{index + 1}.</span>
              <input
                type="text"
                className="form-control shadow-none border-0 p-0"
                style={{ height: "33px" }}
                value={step}
                onChange={(e) => updateCautionStep(index, e.target.value)}
                onKeyDown={addCautionStep}
              />
              {index > 0 && (
                <button
                  type="button"
                  className="btn btn-outline-danger ms-2"
                  onClick={() => removeCautionStep(index)}
                >
                  <FaTimes />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* forkids */}
        <div className="col-md-6">
          <label className="form-label mx-2">For Kids under 10?</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input shadow-none"
              type="radio"
              name="forKids"
              id="forKidsYes"
              value="yes"
              checked={newRemedy.forKids === "yes"}
              onChange={(e) =>
                setNewRemedy({ ...newRemedy, forKids: e.target.value })
              }
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
              checked={newRemedy.forKids === "no"}
              onChange={(e) =>
                setNewRemedy({ ...newRemedy, forKids: e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="forKidsNo">
              No
            </label>
          </div>
        </div>

        {/* submit */}
        <div className="col-12">
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddRemedy;
