import React from "react";

export default ({
  started,
  go,
}) => (
  <div>
    <p>
      Welcome! Congrats! You solved the first clue
      <br />
      Continue on to see what awaits you
      <br />
      <br />
      Here you'll find a list of clues
      <br />
      And riddles, hints, and puzzles too
      <br />
      <br />
      Some hints will lead you to a code,
      <br />
      Some hints have answers you will know.
      <br />
      <br />
      And, with each code correct,
      <br />
      Closer and closer you will get,
      <br />
      To finding the destination I have set...
    </p>
    <div className="start-container">
      {/* <span>{started ? "You're back!" : "Let's go!"}</span> */}
      <button className="start-button"onClick={go}>
        {started ? "continue" : "begin"}
      </button>
    </div>
  </div>
);
