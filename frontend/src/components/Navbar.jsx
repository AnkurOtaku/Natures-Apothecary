import React, { useState } from "react";
import { GiHerbsBundle } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import targetArea from "./targetArea";
import { useRemedyStore } from "../store/remedy";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();
  const {setFilter} = useRemedyStore();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("bg-dark", !isDarkMode);
    document.body.classList.toggle("text-light", !isDarkMode);
    document.body.classList.toggle("bg-light", isDarkMode);
    document.body.classList.toggle("text-dark", isDarkMode);
  };

  function handleDbClick() {
    navigate("/delete");
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-lg">
        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100">
          <div className="col-12 col-md-6 text-center text-md-start my-2">
            <Link
              className={`navbar-brand m-0 ${
                isDarkMode ? "text-light" : "text-dark"
              }`}
              to={"/"}
              onDoubleClick={handleDbClick}
            >
              Natural Remedies{" "}
              <GiHerbsBundle
                size={"2em"}
                color={isDarkMode ? "lightgreen" : "green"}
              />
            </Link>
          </div>
          <div className="col-6 d-flex flex-row align-items-center my-2">
              <select
                className="form-select shadow-none mb-md-0"
                id="filter"
                required
                onChange={(e) => {
                  setFilter(e.target.value);
                }}
              >
                <option value="">All Remedies</option>
                {targetArea.map((areas, index) => (
                  <option key={index} value={areas.area}>
                    {areas.area}
                  </option>
                ))}
              </select>
            <button
              className={`btn btn-outline-${
                isDarkMode ? "light" : "dark"
              } ms-3`}
              onClick={toggleTheme}
            >
              {isDarkMode ? (
                <FaSun size={"1.5em"} />
              ) : (
                <FaMoon size={"1.5em"} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
