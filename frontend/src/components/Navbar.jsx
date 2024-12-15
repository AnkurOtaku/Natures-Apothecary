import React, { useEffect, useState } from "react";
import { GiHerbsBundle } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaTriangleExclamation } from "react-icons/fa6";
import { IoIosCloseCircle } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { Link, useLocation, useNavigate } from "react-router-dom";
import targetArea from "./targetArea";
import { useRemedyStore } from "../store/remedy";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkTheme, setDarkTheme, setFilter, filter } = useRemedyStore();

  useEffect(() => {
    // Initialize all popovers after component mounts
    const popoverTriggerList = document.querySelectorAll(
      '[data-bs-toggle="popover"]'
    );
    popoverTriggerList.forEach((popoverTriggerEl) => {
      new bootstrap.Popover(popoverTriggerEl); // Initialize popover
    });
  }, []);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("bg-dark", !darkTheme);
    document.body.classList.toggle("text-light", !darkTheme);
    document.body.classList.toggle("bg-light", darkTheme);
    document.body.classList.toggle("text-dark", darkTheme);
  };

  function handleDbClick() {
    navigate("/delete");
  }

  return (
    <nav
      className={`navbar ${
        darkTheme ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-lg">
        <div className="row align-items-center justify-content-between w-100 py-2 m-0">
          {/* Heading */}
          <div className="col text-start">
            <Link
              className={`navbar-brand ${
                darkTheme ? "text-light" : "text-dark"
              }`}
              onDoubleClick={handleDbClick}
              onClick={() => {
                setFilter("");
              }}
              to={"/"}
            >
              Natural Remedies{" "}
              <GiHerbsBundle
                size={"2em"}
                color={darkTheme ? "lightgreen" : "green"}
              />
            </Link>
          </div>

          {/* Select Dropdown (Hidden in Mobile) */}
          <div className="col d-none d-md-block">
            <select
              className="form-select shadow-none"
              id="canvasFilter"
              required
              value={filter}
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
          </div>

          {/* Right Section (Theme Toggle + Warning Icon + Add remedy button) */}
          <div className="col d-flex justify-content-end align-items-center">
            {/* Theme Toggle */}
            <button
              className={`btn btn-outline-${
                darkTheme ? "light" : "dark"
              } me-2 d-none d-sm-inline-block`}
              onClick={toggleTheme}
            >
              {darkTheme ? <FaSun size={"1.5em"} /> : <FaMoon size={"1.5em"} />}
            </button>

            {/* Warning Popover (Hidden on Mobile) */}
            <span
              className="btn btn-warning px-3 py-2 me-2 d-none d-md-inline-block"
              tabIndex="0"
              data-bs-toggle="popover"
              data-bs-trigger="hover focus"
              data-bs-placement="bottom"
              data-bs-content="For serious cases, consult a doctor—nature complements, not replaces."
            >
              <FaTriangleExclamation />
            </span>

            {/* Add Remedy Toggle */}
            <Link
              className="btn btn-success px-3 py-2 me-2 d-none d-md-inline-block"
              to={"/add"}
            >
              <IoAddOutline size={"1.3em"} />
            </Link>

            {/* Menu Toggle (Visible on Mobile) */}
            <button
              className="btn btn-success px-3 py-2 d-md-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#remedyMenu"
              aria-controls="remedyMenu"
            >
              <TiThMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas for Mobile */}
      <div
        className="offcanvas offcanvas-end d-md-none"
        tabIndex={-1}
        id="remedyMenu"
        aria-labelledby="remedyMenuLabel"
      >
        {/* canvas header */}
        <div
          className={`offcanvas-header justify-content-between ${
            darkTheme ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          <button
            className={`btn btn-outline-${
              darkTheme ? "light" : "dark"
            } me-2 d-sm-none`}
            onClick={toggleTheme}
          >
            {darkTheme ? <FaSun size={"1.5em"} /> : <FaMoon size={"1.5em"} />}
          </button>
          <h5 className="offcanvas-title text-success" id="remedyMenuLabel">
            Menu
          </h5>
          <IoIosCloseCircle
            color="red"
            size={"2em"}
            className="m-0"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        {/* canvas body */}
        <div
          className={`offcanvas-body ${
            darkTheme ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {location.pathname !== "/add" && (
            <>
              {/* Dropdown Filter */}
              <select
                className="form-select shadow-none mb-3"
                id="filter"
                required
                onChange={(e) => {
                  setFilter(e.target.value);
                  // Close the offcanvas
                  const closeRemedyMenu = bootstrap.Offcanvas.getInstance(
                    document.getElementById("remedyMenu")
                  );
                  if (closeRemedyMenu) closeRemedyMenu.hide();
                }}
              >
                <option value="">All Remedies</option>
                {targetArea.map((areas, index) => (
                  <option key={index} value={areas.area}>
                    {areas.area}
                  </option>
                ))}
              </select>

              {/* Add Remedy */}

              <div className="mx-auto row align-items-center mb-3 w-100">
                <p className="col m-0">Have A Remedy?</p>
                <Link
                  className="col btn btn-success"
                  to={"/add"}
                  onClick={() => {
                    // Close the remedy menu
                    const closeRemedyMenu = bootstrap.Offcanvas.getInstance(
                      document.getElementById("remedyMenu")
                    );
                    if (closeRemedyMenu) closeRemedyMenu.hide();
                  }}
                >
                  <IoAddOutline size={"1.3em"} /> Add now
                </Link>
              </div>
            </>
          )}

          {/* Caution */}
          <div className="btn btn-warning mx-4 p-2 row">
            <FaTriangleExclamation /> Caution
            <p>
              For serious cases, consult a doctor—nature complements, not
              replaces.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
