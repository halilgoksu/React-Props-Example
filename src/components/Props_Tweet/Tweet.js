import React from "react";
import TweetChild from "./TweetChild";
import './tweet.css';


const Tweet = () => {
  const tweets = [
    { name: "future_creeter", tweet: "what kind a end its" },
    { name: "saykolok", tweet: "i do have 6.th sence" },
    { name: "analiz", tweet: "this is a watermelon field ", baska:'baska eleman'},
    { name: "brain", tweet: "i thik most of people has missing connect" },
  ];
  //tweets adinda 4 elemani olan bir obje olusturduk
  //elemanin icindeki obleri yada objeniun birtanesini bile alt comp kullanbiliriz 

  return (
    <div className="tweet">
      <h1>[']</h1>
      <h3>I have {tweets.length} tweets </h3>
      <span>(tweet elemanin kac elemani olduguna ulastik) </span>

      <div className="tweet-map">
        
        {tweets.map((props) => (
          <TweetChild baska={props.baska}  name={props.name} tweet={props.tweet}></TweetChild>
        ))}
      </div>
      
    </div>
    //map, tweets eleman sayisi kadar <TweetChild> i render eder 

  );
};

export default Tweet;
