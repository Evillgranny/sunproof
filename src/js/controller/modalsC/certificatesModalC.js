import { certificates, certificatesBtn, certificatesBtnBtnCross } from "../../view/modalsV/certificatesModalV";
import { Modals } from "../../model/modals/Modals";
import { CertificatesSlider} from "../../model/sliders/CertificatesSlider";
import { certificatesSlider } from "../../view/slidersV/certificatesSliderV";

let certF = new Modals(certificates, certificatesBtn)
let certSlider = new CertificatesSlider(certificatesSlider)

certificatesBtn.onclick = () => {
    certF.showModal()

    certSlider.sliderInit()
}

certificatesBtnBtnCross.onclick = () => {
    certF.hideModal()
}

export { certF }
