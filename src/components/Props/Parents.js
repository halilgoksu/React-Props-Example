import React from "react";
import Child from "./Child";
import './props.css'

function Parents() {


  const name = "halil";
  const age = 31;

  return (
    <div className="parents">
      <h4>helllo  props </h4>
      <Child name={name} age={age}></Child>
    </div>
  );
}

export default Parents;
