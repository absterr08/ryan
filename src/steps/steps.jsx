import React, { useState } from "react";
import Step from "./step";
import { stepWithLineBreaks, setNumSolved } from "../util";
import { STEPS } from "./texts";
import "./steps.css";

const StepNumber = ({ currStep, totalSteps }) => (
  <div className="step-number">
    {currStep}/{totalSteps}
  </div>
)

const StepButtons = ({
  goBack,
  advance,
}) => (
  <div className={"next-buttons"}>
    <button className={`next-button ${goBack ? "": "hidden"}`} onClick={goBack}>{"<"}</button>
    <button className={`next-button ${advance ? "": "hidden"}`} onClick={advance}>{">"}</button>
  </div>
);

export default ({ startingStep, onComplete }) => {
  const [currStep, setStep] = useState(Math.min(startingStep, STEPS.length - 1));
  const [countUnlocked, setCountUnlocked] = useState(startingStep);

  const advance = () => {
    if (currStep === STEPS.length - 1) onComplete();
    if (currStep >= countUnlocked) return;
    setStep(currStep + 1);
  };

  const goBack = () => {
    if (currStep === 0) return;
    setStep(currStep - 1);
  };

  const unlock = () => {
    setCountUnlocked(countUnlocked + 1);
    setNumSolved(countUnlocked + 1);
    if ((countUnlocked + 1) === STEPS.length) {
      onComplete();
      return;
    }
    setStep(currStep + 1);
  };

  const allSteps = STEPS.map(
    step => (
      <Step
        hint={stepWithLineBreaks(step[0])}
        answer={step[1]}
        showAnswer={countUnlocked > currStep}
        unlock={unlock}
        advance={advance}
        goBack={goBack}
      />
  ));
  return (
    <>
      <StepNumber currStep={currStep + 1} totalSteps={STEPS.length} />
      {allSteps[currStep]}
      <StepButtons
        goBack={currStep > 0 ? goBack : undefined}
        advance={currStep < countUnlocked ? advance : undefined}
        nextDisabled={currStep >= countUnlocked}
      />
    </>
  );
}