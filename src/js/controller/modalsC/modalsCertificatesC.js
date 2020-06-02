import { CertificatesSlider} from "../../model/sliders/CertificatesSlider";
import { certificatesSlider } from "../../view/slidersV/certificatesSliderV";

let certSlider = new CertificatesSlider(certificatesSlider)

function certSliderInit () {
    certSlider.sliderInit()
}

export { certSliderInit }
