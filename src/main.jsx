import React, { useState } from "react";
import { getNumSolved } from "./util";
import Home from "./home";
import Steps from "./steps/steps";
import End from "./finish";

const HOME = "home";
const SOLVING = "solving";
const SOLVED = "solved";

export default () => {
  const numSolved = getNumSolved();
  const [state, setState] = useState(HOME);
  switch (state) {
    case HOME:
      return (
        <Home started={numSolved > 0} go={() => setState(SOLVING)} />
      );
    case SOLVING:
      return (
        <Steps startingStep={numSolved} onComplete={() => setState(SOLVED)} />
      );
    default:
      return <End goBack={() => setState(SOLVING)} />;
  }
}