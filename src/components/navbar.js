import React from "react";
import "../components/navbar.css";
import Logo from "./logo.jpg";

const navbar = (props) => {
  const set = props.setQuery;
  return (
    <div>
      <nav className="navbar">
        <div className="logo-title">
          <img className="logo" src={Logo} alt="logo" />
          <h3 className="title">News</h3>
        </div>
        <div className="input-button">
          <input
            className="input-box"
            id="input-box"
            type="text"
            onChange={(event) => {
              set(event.target.value);
            }}
            placeholder="Search topic..."
          />
          <div>
            <button className="button" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
