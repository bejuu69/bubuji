import { useRouter } from "next/router";
import React from "react";


const Main = () => {
  const router = useRouter();
  return (
    
    <div className="bg-white w-screen h-24  flex items-center "> 
    <svg width="100" height="100" onClick={() => router.push("/blade")} >
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="black" />
</svg>

    <h1 className=" ml-12 text-2xl font-bold"> Henson shaving</h1>
    </div>
    );
};

export default Main;