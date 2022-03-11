import React from "react";

const GrandChild = (props) => {
  return (
    <div className="grand-child">
      <p className="apple-tree-text">
        Apple and Tree icons comming from Parents Component to GrandChild
        Component
      </p>

      <h1 className="apple-tree">
        {props.apple}
        {props.tree}
      </h1>

      <p className="apple-tree-text">
        Bike icon is coming from Child Component to GrandChild Component
      </p>

      <h1 className="bike">{props.bike}</h1>
    </div>
  );
};

export default GrandChild;
