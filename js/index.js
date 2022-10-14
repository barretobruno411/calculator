import {name} from "./modules/test.js"
import {display, equals, buttons} from "./modules/domModels.js"
import {displayAdd} from "./modules/functions.js"

buttons.forEach(button => button.addEventListener("click", e => displayAdd(e.target.textContent)))
equals.addEventListener("click", (e) => display.textContent = "bow wow")


