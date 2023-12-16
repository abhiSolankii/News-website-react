import React from "react";
import "../components/navbar.css";

const navbar = (props) => {
  const setQuery = props.setQuery;
  const setlang = props.setlang;

  return (
    <div>
      <nav className="navbar">
        <div className="logo-title">
          <img
            className="logo"
            src={`https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg`}
            alt="logo"
          />
          <h3 className="title">News</h3>
        </div>

        <div className="language">
          <select
            className="language-select"
            onChange={(event) => {
              setlang(event.target.value);
            }}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ja">Japanese</option>
            <option value="de">German</option>
          </select>
        </div>

        <div>
          <button className="button" type="submit">
            UPDATE
          </button>
        </div>
        <div className="input">
          <input
            className="input-box"
            id="input-box"
            type="text"
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            placeholder="Search topic..."
          />
        </div>
      </nav>
    </div>
  );
};

export default navbar;
