import React, { useState } from "react";
import { GiHerbsBundle } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("bg-dark", !isDarkMode);
    document.body.classList.toggle("text-light", !isDarkMode);
    document.body.classList.toggle("bg-light", isDarkMode);
    document.body.classList.toggle("text-dark", isDarkMode);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-lg">
        <div className="row w-100">
          <div className="col-12 col-md-6 text-center text-md-start my-2">
            <Link
              className={`navbar-brand ${
                isDarkMode ? "text-light" : "text-dark"
              }`}
              to={"/"}
            >
              Natural Remedies{" "}
              <GiHerbsBundle
                size={"2em"}
                color={isDarkMode ? "lightgreen" : "green"}
              />
            </Link>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center my-2">
            <form
              className="d-flex"
              role="search"
              style={{ maxWidth: "300px" }}
            >
              <input
                className="form-control me-2 shadow-none"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
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
