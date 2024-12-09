import React from "react";
import { Link } from "react-router-dom";  

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-5 text-2xl font-bold">Sidebar</div>
      <ul className="mt-10">
      <li className="px-4 py-2 hover:bg-gray-700">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link to="/car">Car</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link to="/company">Company</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
