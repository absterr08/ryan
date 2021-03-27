import React, { useState } from "react";

export default ({ goBack }) => {
  const [hidden, setHidden] = useState(true);
  setTimeout(() => setHidden(false), 1);
  return (
    <div className={`end-poem ${hidden ? "end-hidden" : "end-shown"}`}>
      <p>
        You'll find me in a meadow where flowers don't grow,
        <br />
        But our love bloomed,
        <br />
        On warm summer nights under the stars.
        <br />
        A special place in our hearts.
        <br /><br />
        PS text me when you're on your way :) {"<3"}
      </p>
      <div className="start-container">
        <button className="start-button" onClick={goBack}>
          {"<"}
        </button>
      </div>
    </div>
  );
};
