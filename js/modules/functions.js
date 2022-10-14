import {
  display,
  prevValue,
  operatorValue,
  currentValue,
} from "./domModels.js";

const regex_number = /[0-9]|\./;
const regex_operator = /x|\/|\-|\+/gi;
const regex_dot = /\./;

export const displayAdd = (content) => {
  if (regex_number.test(content)) {
    if (prevValue.textContent === "0") {
      prevValue.textContent = content;
    } else if (operatorValue.textContent) {
      if (currentValue.textContent.includes(".") && content.includes(".")) {
        return;
      }
      currentValue.textContent += content;
    } else if (prevValue.textContent !== "0") {
      if (prevValue.textContent.includes(".") && content.includes(".")) {
        return;
      }
      prevValue.textContent += content;
    }
  } else {
    operatorValue.textContent = content;
  }
};

export const evaluate = (valueOne, operand, valueTwo) => {
  if (operand.textContent === "+") {
    prevValue.textContent =
      Number(valueOne.textContent) + Number(valueTwo.textContent);
    operatorValue.textContent = "";
    currentValue.textContent = "";
  } else if (operand.textContent === "/") {
    prevValue.textContent =
      Number(valueOne.textContent) / Number(valueTwo.textContent);
    operatorValue.textContent = "";
    currentValue.textContent = "";
  } else if (operand.textContent === "-") {
    prevValue.textContent =
      Number(valueOne.textContent) - Number(valueTwo.textContent);
    operatorValue.textContent = "";
    currentValue.textContent = "";
  } else if (operand.textContent === "X") {
    prevValue.textContent =
      Number(valueOne.textContent) * Number(valueTwo.textContent);
    operatorValue.textContent = "";
    currentValue.textContent = "";
  }
};
