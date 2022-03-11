import React from "react";
import Child from "./Child";
import "./props.css";
import { GiAppleCore } from "react-icons/gi";
import { GiFruitTree } from "react-icons/gi";

function Parents() {
  const Apple = (
    <h1>
      <GiAppleCore className="apple"></GiAppleCore>
    </h1>
  );

  const Tree = (
    <h1>
      <GiFruitTree className="tree"></GiFruitTree>
    </h1>
  );

  return (
    <div className="parents">
      <h2 className="props">Props</h2>
      <p>________________________</p>
      <Child Apple={Apple} Tree={Tree}></Child>
    </div>
  );
}

export default Parents;
