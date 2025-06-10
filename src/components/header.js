import React from "react";

const HeaderComponent = () => {
  const currentPath = window.location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar">
        <div className="container">
          <a className="navbar-brand" href="/index">
            Travelix<span>Travel Agency</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${isActive('/dolist') ? 'active' : ''}`}>
                <a href="/dolist" className="nav-link">
                Do List
                </a>
              </li>
              <li className={`nav-item ${isActive('/index') ? 'active' : ''}`}>
                <a href="/index" className="nav-link">
                  Home
                </a>
              </li>
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li className={`nav-item ${isActive('/destination') ? 'active' : ''}`}>
                <a href="/destination" className="nav-link">
                  Destination
                </a>
              </li>
              <li className={`nav-item ${isActive('/hotel') ? 'active' : ''}`}>
                <a href="/hotel" className="nav-link">
                  Hotel
                </a>
              </li>
              <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
