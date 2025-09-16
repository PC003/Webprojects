import React, { useState } from "react";
import Video from "../Video/Video.jsx";

function Module({ moduleName, resources }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full bg-[#FEF2F4] rounded-2xl">
      {/* Module Header */}
      <div
        className="flex flex-row items-center cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}

        <div className="block w-80 p-2 my-2 text-lg font-semibold rounded-lg hover:">
          {moduleName}
        </div>
      </div>

      {/* Expand → Show Videos */}
      {open && (
        <div className="m-1 flex flex-col gap-2 pl-3">
          {resources.map((res, idx) => (
            <Video key={idx} url={res.url} title={res.title} thumbnail={res.thumbnail} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Module;
