import React from "react";
import "./steps.css";


export default ({
  advance,
  goBack,
}) => {
  return (
      <div className={"next-buttons"}>
        <button className={`next-button ${!goBack ? "hidden": ""}`} onClick={goBack}>{"<"}</button>
        <button className={`next-button ${!advance ? "hidden": ""}`} onClick={advance}>{">"}</button>
      </div>
  );
};