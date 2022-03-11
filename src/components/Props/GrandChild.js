import React from "react";


const GrandChild = (props) => {
  return (
    <div>
      <h6>{props.money}</h6>
      <h4>{props.name}</h4>
      <h4>{props.age}</h4>
    </div>
  );
};

export default GrandChild;
