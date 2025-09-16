import React from 'react'
import {useNavigate } from 'react-router-dom'

export default function Button({subject,routes}){
    const navigate = useNavigate();
    return(
        <>
          <button
           className="w-40 h-20 px-4 py-2 bg-[#F0E7E7] text-black font-semibold rounded-lg m-2 flex justify-center"
           onClick={()=>navigate(routes)}
          >
           {subject}
          </button>
        </>
    );
}