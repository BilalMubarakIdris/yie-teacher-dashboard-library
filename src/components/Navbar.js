import React from "react";
import { Link } from "react-router-dom";
// import "./header.css"

function Navbar() {
  return (
    <>
      <header className="border-solid border-2 border-green-500 h-screen">
        <ul className="list-none p-0">
          <li className="bg-blue-500  py-2 px-0 my-0.5">
            <Link className="py-0 px-20 text-white" to="/">Library</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;