import React from 'react'

import { Link } from 'react-router-dom';
export default function Home() {
     const subjects = [
    { name: "CSE", route: "/cse" },
    { name: "ECE", route: "/ece" },
    { name: "EEE", route: "/eee" },
    { name: "Mech", route: "/mech" },
    { name: "Civil", route: "/civil" },
    { name: "IT", route: "/it" },
    { name: "BioTech", route: "/biotech" },
    { name: "Mtech", route: "/mtech" },
  ];
  return (
    <>
    <div className="mx-auto w-full max-w-7xl flex flex-row items-start justify-between px-12 py-8">
      
      {/* Left: Text */}
      <div className="flex flex-col justify-center mt-16">
        <h1 className="text-6xl font-extrabold text-gray-800 leading-tight">
          Stop <br/>searching, <br /> start studying
        </h1>
        <p className='text-2xl  mt-2'>Browse a curated library of resources,<br/> filtered by branch, year, and subject.</p>
      </div>

      {/* Right: Image */}
      <img
        src="https://i.pinimg.com/736x/ca/d5/f4/cad5f4ba36e6e5b0e23d24a3270bf619.jpg"
        alt="boy studying"
        className="w-[320px] h-[500px] rounded-2xl shadow-lg object-cover scale-x-[-1]"
      />
      <img
        src="https://i.pinimg.com/736x/81/0f/ba/810fbac050c9fb57a6d8a5fe762de95d.jpg"
        alt="boy studying"
        className="w-[320px] h-[500px] rounded-2xl shadow-lg object-cover"
      />
      
    </div>
    <div className='flex justify-center items-center '>
        <div className="grid grid-cols-4 gap-20 px-12 py-8">
        {subjects.map((subj) => (
          <Link
            key={subj.name}
            to={subj.route}
            className="w-[180px] h-[72px] flex items-center justify-center 
                       rounded-lg bg-[#F0E7E7] text-black font-medium 
                       shadow hover:scale-105 transition"
          >
            {subj.name}
          </Link>
        ))}
      </div>
    </div>
      </>
  );
}

