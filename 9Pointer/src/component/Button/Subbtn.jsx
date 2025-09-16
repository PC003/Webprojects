import React, { useState, useContext } from "react";
import Maincontext from "../../Context/MainContext.js";
import Module from "../Module/Module.jsx";

function Subject({ sub }) {
  const [open, setOpen] = useState(false);
  const { csedata, selectedyr } = useContext(Maincontext);

  return (
    <div className="flex flex-col w-full">
      {/* Subject Header */}
      <div
        className="flex flex-row bg-[#f4dfe2] items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}

        <div className="block w-full p-2 my-2 text-xl font-bold rounded-lg ">
          {sub}
        </div>
      </div>

      {/* Expand → Show Modules */}
      {open && (
        <div className="ml-6 flex flex-col pl-3 pr-9 gap-3 ">
          {Object.entries(csedata[selectedyr][sub]).map(([moduleName, resources]) => (
            <Module key={moduleName} moduleName={moduleName} resources={resources} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Subject;
