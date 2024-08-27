import React from "react";

const Navbar = (props) => {
  const setQuery = props.setQuery;
  const setlang = props.setlang;

  return (
    <div>
      <nav className="flex flex-col md:flex-row justify-between items-center p-4 bg-blue-600 text-white">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="h-10 w-10 mr-2"
            src={`https://st2.depositphotos.com/6789684/12262/v/450/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg`}
            alt="logo"
          />
          <a href="/" className="text-2xl font-bold">
            News
          </a>
        </div>

        <div className="flex items-center mb-4 md:mb-0">
          <select
            className="border rounded p-2 text-black"
            onChange={(event) => setlang(event.target.value)}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ja">Japanese</option>
            <option value="de">German</option>
          </select>
        </div>

        <div className="flex items-center mb-4 md:mb-0">
          <button
            className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-md"
            type="submit"
          >
            UPDATE
          </button>
        </div>

        <div className="flex items-center w-full md:w-auto">
          <input
            className="w-full md:w-64 p-2 rounded border border-gray-300 text-black"
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topic..."
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
