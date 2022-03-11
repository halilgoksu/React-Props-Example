import React from "react";
import GrandChild from "./GrandChild";



const Child =(Props)=>{
    const ChildToGrand='money'
    return(
        <section>
        <h1>Horse</h1>
        <GrandChild adi={Props.name} yasi={Props.age} money={ChildToGrand} ></GrandChild>
    </section>
    )
 
}


export default Child;