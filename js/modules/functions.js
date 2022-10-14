import {
  display,
  prevValue,
  operatorValue,
  currentValue,
} from "./domModels.js";

const regex_number = /[0-9]|\./;
const regex_operator = /x|\/|\-|\+/gi;

export const displayAdd = (content) => {

    if (operatorValue.textContent) {
        console.log("ja tem valor no operador")
    }

  if (regex_number.test(content)) {

    if (prevValue.textContent === "0") {

      prevValue.textContent = content;

    } else if (operatorValue.textContent) {

        currentValue.textContent += content

    } else if (prevValue.textContent !== "0") {

      prevValue.textContent += content;

    }
  } else  {
    
    operatorValue.textContent = content;

  }
};

export const evaluate = (valueOne, operand, valueTwo) => {

    if (operand.textContent === "+") {
        prevValue.textContent = Number(valueOne.textContent) + Number(valueTwo.textContent)
        operatorValue.textContent = ""
        currentValue.textContent = ""
    } else if (operand.textContent === "/") {
        prevValue.textContent = Number(valueOne.textContent) / Number(valueTwo.textContent)
        operatorValue.textContent = ""
        currentValue.textContent = ""
    } else if (operand.textContent === "-") {
        prevValue.textContent = Number(valueOne.textContent) - Number(valueTwo.textContent)
        operatorValue.textContent = ""
        currentValue.textContent = ""
    } else if (operand.textContent === "X") {
        prevValue.textContent = Number(valueOne.textContent) * Number(valueTwo.textContent)
        operatorValue.textContent = ""
        currentValue.textContent = ""
    }

}
