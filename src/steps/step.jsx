import React, { useState } from "react";
import "./steps.css";
import { showAndHide } from "../util";

const wrong = <span className="error">Try again</span>;
const right = <span className="error">🎉</span>;

export default ({
  hint,
  answer,
  advance,
  unlock,
  showAnswer,
}) => {
  const [inputVal, setVal] = useState("");
  const [answeredWrong, setAnsweredWrong] = useState(false);
  const [answeredRight, setAnsweredRight] = useState(false);

  const onAnsweredRight = () => {
    showAndHide({
      setVisible: setAnsweredRight,
      delay: 300,
      numTimes: 2,
    });
    setTimeout(() => {
      setVal("");
      unlock();
      advance();
    }, 1200);
  }

  const onSubmit = args => {
    args.preventDefault();
    if (inputVal.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
      onAnsweredRight();
      setAnsweredWrong(false);
    } else {
      showAndHide({
        setVisible: setAnsweredWrong,
        delay: 300,
        numTimes: 3,
      });
    }
  }
  const onInput = (args) => {
    setVal(args.target.value);
  }

  return (
    <div className="step-container">
      <span className="hint">{hint}</span>
      <div className="step-content-container">
        <div className="error-container">
          <div className={answeredWrong ? "error-shown" : "error-hidden"}>
            {wrong}
          </div>
          <div className={answeredRight ? "success-shown" : "success-hidden"}>
            {right}
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {
            showAnswer ? <span className="answer">{answer}</span>
            : <input className="input" value={inputVal} onInput={onInput} type="text" />
          }
        </form>


        <div className="submit-button-container">
          {!showAnswer && <button className="submit-button" onClick={onSubmit}>enter</button>}
        </div>
      </div>
    </div>
  );
};