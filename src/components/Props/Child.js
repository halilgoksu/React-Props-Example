import React from "react";
import GrandChild from "./GrandChild";
import { MdOutlinePedalBike } from "react-icons/md";

const Child = (Props) => {
  const Bike = (
    <h1>
      <MdOutlinePedalBike></MdOutlinePedalBike>
    </h1>
  );
  return (
    <GrandChild tree={Props.Tree} apple={Props.Apple} bike={Bike}></GrandChild>
  );
};

export default Child;
