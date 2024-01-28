import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  return (
    <div className=" container" >
      <nav className="navbar navbar-expand-lg  px-5 py-3 mb-3 rounded-5 rounded-top-0" style={{ background: " linear-gradient( 267deg, #066069 0%, #1e7d62 38.49%, #8aca38 100%)" }} >
        <div className="container">
          <Link className="navbar-brand text-light " to="/">Meram'da Gezilecek Yerler</Link>
          <button className="navbar-toggler bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation ">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link text-light btn btn-sm btn-outline-secondary text-start" to="/doga">Doğa</Link>
              <Link className="nav-link text-light btn btn-sm btn-outline-secondary text-start" aria-current="page" to="/tarihi_yapilar">Tarihi Yapılar</Link>
              <Link className="nav-link text-light btn btn-sm btn-outline-secondary text-start" to="/park">Parklar</Link>
              <Link className="nav-link text-light btn btn-sm btn-outline-secondary text-start" to="/camiler">Camiler ve Medreseler</Link>
              <Link className="nav-link text-light btn btn-sm btn-outline-secondary text-start" to="/muze">Müzeler</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
