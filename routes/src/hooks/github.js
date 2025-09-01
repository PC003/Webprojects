import { useEffect,useState } from "react";

function github(){
    const [data,setdata]=useState(0)

    useEffect(()=>{
        fetch(`https://api.github.com/users/hiteshchoudhary`)
        .then((response)=>response.json())
        .then(json=>
          setdata(json)
        )
        .catch((err) => {
        console.error("Error fetching github api:", err);
      });
    },[])
    return data;
}
export default github