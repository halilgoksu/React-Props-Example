import React from "react";


const TweetChild=(al)=>{
    return(
        <div className="tweet-child">
            <h4>{al.name}</h4>
            <h6>{al.tweet}</h6>
            <h6>{al.baska}</h6>
        </div>
        //ustk comp gelecek propar icin kalip hazirladik
    
    )
}

export default TweetChild;