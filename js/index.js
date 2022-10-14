import { name } from "./modules/test.js";
import {
  display,
  equals,
  buttons,
  prevValue,
  operatorValue,
  currentValue,
} from "./modules/domModels.js";

import { displayAdd, evaluate } from "./modules/functions.js";

buttons.forEach((button) =>
  button.addEventListener("click", (e) => displayAdd(e.target.textContent))
);

equals.addEventListener("click", (e) => evaluate(prevValue,operatorValue,currentValue));

document.addEventListener("keydown", (e) => {
    console.log(e.key)
    if (e.key === "Escape") {
        prevValue.textContent = "0"
        currentValue.textContent = ""
        operatorValue.textContent = ""
    }
    if (e.key === "Backspace") {
        if (operatorValue.textContent) {
            currentValue.textContent = currentValue.textContent.slice(0,-1)
        } else {
            prevValue.textContent = prevValue.textContent.slice(0,-1)
        }

    }
    if (e.key === "Enter") {
        document.getElementById("=").click()
    }
    if (e.key ==="*") {
        document.getElementById("x").click()
    }
    if (e.key) {
        document.getElementById(e.key).click()
    }
})
