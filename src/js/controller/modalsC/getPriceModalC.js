import { Modals } from "../../model/modals/Modals";
import { getPriceBtn, getPrice, getPriceBtnCross } from "../../view/modalsV/getPriceModalV";
let getPriceF = new Modals(getPrice, getPriceBtn)

getPriceBtn.forEach(i => {
    i.onclick = () => {
        getPriceF.showModal()
    }
})

getPriceBtnCross.onclick = () => {
    getPriceF.showModal()
}

export { getPriceF }
