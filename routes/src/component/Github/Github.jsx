import React, { useState } from "react";
import github from "../../hooks/github";
export default function GitHub(){
    
    const gitd =github();
    const follower = gitd["followers"];
    const avatar = gitd["avatar_url"];
    const name = gitd["name"];
    return(
        <>
       <div className="flex flex-col justify-center items-center mb-40">
            
            <div className="p-6 ">
                {avatar && (
                <img
                src={avatar}
                alt="GitHub Avatar"
                className="w-64 h-64 rounded-full border"
                />
               )}
             </div>
             <h2 className="text-4xl mb-4">{name}</h2>
             <div className="bg-amber-500 text-2xl text-white">Github Followers: {follower}</div>
       </div>
        </>
    )
}