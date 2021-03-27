import React from "react";

const NUM_SOLVED_KEY = "NUM_SOLVED";

export function getNumSolved() {
  let numSolved;
  try {
    numSolved = JSON.parse(localStorage.getItem(NUM_SOLVED_KEY) || "0");
  } catch {
    numSolved = 0;
  }
  return numSolved;
}

export function setNumSolved(num) {
  try {
    localStorage.setItem(NUM_SOLVED_KEY, JSON.stringify(num));
  } catch {
  }
}

export const showAndHide = ({
  setVisible,
  delay = 400,
  numTimes,
}) => {
  let i = 0;
  while (i < numTimes * 2) {
    setTimeout(() => {
      setVisible(true)
    }, delay * i);
    i ++;
    setTimeout(() => {
      setVisible(false)
    }, delay * i);
    i ++;
  }
}

export const stepWithLineBreaks = (stepStr) => {
  return stepStr.split("\n").map(words => {
    return <p>{words}</p>;
  });
}