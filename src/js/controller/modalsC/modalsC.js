import { modalBtns, popus } from "../../view/modalsV/modalsV";
import { Modals } from "../../model/modals/Modals";
import $ from 'jquery'
import { certificatesSliderBtn } from "../../view/slidersV/certificatesSliderV";
import { certSliderInit } from "./modalsCertificatesC";

let modals = new Modals()

popus.forEach(i => {
    i.onclick = function (e) {
        if (e.target.classList.contains('popup'))
            modals.hideModal(this)
    }
})

modalBtns.forEach(i => {
    i.onclick = function () {
        if (i === certificatesSliderBtn) {
            certSliderInit()
        }
        modals.btnClick($(this).data('modal'))
    }

    $($(i).data('modal')).find('.modal-cross').on('click', function () {
        modals.hideModal($($(i).data('modal')))
    })
})


export {modals, popus}
