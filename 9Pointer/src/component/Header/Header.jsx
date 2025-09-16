import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Tip from "../Tip/Tip";

export default function Header() {
  const [showtip,setshowtip] =useState(false)
  return (
    <header className="shadow sticky z-50 top-0 bg-white">
      <nav className="border-b border-gray-200">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-12 lg:px-6 py-3">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <p className="text-2xl text-black font-bold">9Pointer</p>
          </Link>

          {/* Menu */}
          <div className="hidden lg:flex">
            <ul className="flex gap-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `duration-200 ${
                      isActive
                        ? "text-orange-700 font-semibold"
                        : "text-gray-700"
                    } hover:text-orange-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <button
                onClick={()=>setshowtip(true)} className="hover:text-orange-700 "
                >
                  Tip
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showtip && <Tip onclose={()=>setshowtip(false)}></Tip>}
    </header>
  );
}
