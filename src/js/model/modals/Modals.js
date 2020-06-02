import $ from 'jquery'

class Modals {
    showModal (modal) {
        $(modal).css({display: 'flex'})
            .animate({opacity: 1}, 500)
    }

    hideModal (modal) {
        $(modal).animate({opacity: 0}, 500)
        setTimeout(() => {
            $(modal).css({display: 'none'})
        },500)
    }

    btnClick (modal) {
        let currentModal = document.querySelector(modal)
        this.showModal(currentModal)
    }
}

export { Modals }
