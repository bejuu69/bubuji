import React from "react";

const Blade = () => {
    return (
        <div className="bg-white w-full h-24  flex items-center justify-between px-8"> 
            <svg width="100" height="100" onClick={() => router.push("/blade")} ><circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="black" /></svg> 
            <h1 className=" ml-12 text-2xl font-bold"> Henson shaving</h1>
            <svg width="100" height="100"  >
                <circle className="" cx="50" cy="40" r="20"  stroke="black" stroke-width="1" fill="" />
            </svg>
        
        </div>
    
    
    
    
    ) 
    
}

export default Blade;  