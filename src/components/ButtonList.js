import React from "react";
import Button from "./Button";
const list = ["ALL", "Live", "Gaming", "Song", "Cooking", "Cricket"];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((b, i) => (
        <Button key={i} name={b} />
      ))}
    </div>
  );
};

export default ButtonList;
