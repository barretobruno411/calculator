import {
  display,
  prevValue,
  operatorValue,
  currentValue,
} from "./domModels.js";

const regex_number = /[0-9]/;

export const displayAdd = (content) => {
  if (regex_number.test(content)) {
    if (prevValue.textContent === "0") {
      prevValue.textContent = content;
    } else {
      prevValue.textContent += content;
    }
  } else {
    operatorValue.textContent = content
  }
};
