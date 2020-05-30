import { Catalog } from "../../model/Catalog/Catalog";
import { whopper, headerMenu, body, html } from "../../view/whopperV/whopper";


let whopperC = new Catalog(whopper, headerMenu)

whopper.onclick = function () {
    if (!whopper.classList.contains('active')) {
        whopperC.activeBtn()
        whopperC.showMenu()
        body.classList.add('blocked')
        html.classList.add('blocked')
    } else {
        whopperC.inactiveBtn()
        whopperC.hideMenu()
        body.classList.remove('blocked')
        html.classList.remove('blocked')
    }
}

export {whopperC}
