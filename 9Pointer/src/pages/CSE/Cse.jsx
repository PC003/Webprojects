import React, { useContext } from "react";
import Subject from "../../component/Button/Subbtn";
import Maincontext from "../../Context/MainContext.js";

export default function Cse() {
  const { csedata, selectedyr, setselectedyr } = useContext(Maincontext);

  return (
    <div className="min-h-screen bg-white w-full text-black">
      <div className="max-w-5xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-black pb-4 mb-6">
          <h1 className="text-3xl font-bold">Computer Science Syllabus</h1>

          {/* Year Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="year" className="font-semibold text-lg">
              Year:
            </label>
            <select
              id="year"
              value={selectedyr}
              onChange={(e) => setselectedyr(e.target.value)}
              className="p-2 border border-black rounded-lg bg-white focus:outline-none"
            >
              <option value="first">First</option>
              <option value="second">Second</option>
              {/* <option value="third">Third</option>
              <option value="fourth">Fourth</option> */}
            </select>
          </div>
        </div>

        {/* Subjects */}
        <div className="space-y-4">
          {Object.entries(csedata[selectedyr]).map(([subject]) => (
            <div
              key={subject}
              className="border border-black rounded-lg px-4 py-3 bg-[#f4dfe2] hover: "
            >
              <Subject sub={subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
