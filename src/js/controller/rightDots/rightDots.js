import { dotsContainer, sections, dotClass } from "../../view/rightDotsV/rightDotsV";
import { RightDots } from "../../model/RightDots/RightDots";

let rd = false
if (window.innerWidth > 991) {
    let rd = new RightDots(dotsContainer, sections, dotClass)
    rd.dotsToDOM()
}



export { rd }
