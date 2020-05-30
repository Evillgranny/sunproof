import { lastNews } from "../../view/slidersV/lastNewsSliderV";
import { LastNewsSlider} from "../../model/sliders/LastNewsSlider";

let lnSlider = new LastNewsSlider(lastNews)
lnSlider.sliderInit()

export {lnSlider}
