import { thanksModal, thanksModalCross } from "../../view/modalsV/thanksModalV";
import {Modals} from "../../model/modals/Modals";

let thanksModalF = new Modals(thanksModal)

thanksModalCross.onclick = () => {
    thanksModalF.hideModal()
}

export { thanksModalF }
