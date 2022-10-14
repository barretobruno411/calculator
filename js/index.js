import {name} from "./modules/test.js"
import {display, equals} from "./modules/domModels.js"

console.log(display)
console.log(equals)
equals.addEventListener("click", (e) => display.textContent = "bow wow")
