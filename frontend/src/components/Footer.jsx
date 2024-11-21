import React from "react";
import { MdLocalHospital } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-4 border-top border-success">
      <div className="container my-4">
        <div className="row justify-content-center align-items-center column-gap-3">
          <p className="col-3 mb-0">Have A Remedy?</p>
          <Link className="btn btn-success col-3" to={"/add"}>
            <MdLocalHospital /> Add Remedy
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
