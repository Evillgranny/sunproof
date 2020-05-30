import {namePhoneModal, namePhoneModalBtn, namePhoneModalCross} from "../../view/modalsV/namePhonesModalV";
import { Modals } from "../../model/modals/Modals";

let namePhoneModalF = new Modals(namePhoneModal, namePhoneModalBtn)

namePhoneModalBtn.onclick = () => {
    namePhoneModalF.showModal()
}

namePhoneModalCross.onclick = () => {
    namePhoneModalF.hideModal()
}

export { namePhoneModalF }
