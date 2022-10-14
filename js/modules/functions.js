import { display, prevValue, operatorValue, currentValue } from "./domModels.js";

export const displayAdd = (content) => {
  if (display.textContent === "0") {
    display.textContent = content;
  } else {
    display.textContent += content;
  }
  
};
