import $ from "jquery"

class Catalog {
    constructor(btn, menu) {
        this.btn = btn
        this.menu = menu
    }

    activeBtn () {
        this.btn.classList.add('active')
    }

    inactiveBtn () {
        this.btn.classList.remove('active')
    }

    showMenu () {
         this.menu.classList.add('active')
        $(this.menu).slideDown()
    }

    hideMenu () {
        this.menu.classList.remove('active')
        $(this.menu).slideUp()
    }
}

export { Catalog }
