import React from "react";

export default function Tip({ onclose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onclose}
            className="px-3 py-1 bg-[#f0e7e7] text-black rounded-md hover:bg-[#efdbdb]"
          >
            Close
          </button>
        </div>

        {/* Tips List */}
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Start Early - Begin studying at least 1 week before exams instead of last-minute cramming.</li>
          <li>Refer PYQs - While studying, go through PYQ's to understand the pattern and important topics.</li>
          <li>Revise Smartly - Prepare short notes or key highlights for quick revision.</li>
          <li>Day Before Exam - Solve 5-6 PYQs completely to build confidence and get exam-ready.</li>
        </ul>
      </div>
    </div>
  );
}
