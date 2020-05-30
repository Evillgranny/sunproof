class Modals {
    constructor(modal) {
        this.modal = modal
    }

    showModal () {
        this.modal.classList.add('show')
    }

    hideModal () {
        this.modal.classList.remove('show')
    }
}

export { Modals }
