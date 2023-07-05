import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg large-nav">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image
              src="/images/lumenave_logo.png"
              alt="logo"
              width={150}
              height={50}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Solutions
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Learn
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
              />
              <button className="btn" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
