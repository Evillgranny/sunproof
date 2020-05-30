import { catalogBtn, catalogMenu, catalogBtnLink } from "../../view/catalogV/catalogV";
import { Catalog } from "../../model/Catalog/Catalog";
import $ from 'jquery'

let catalogF = new Catalog(catalogBtn, catalogMenu)


if (window.innerWidth > 991) {
    catalogBtn.onmouseover = () => {
        catalogF.activeBtn()
        catalogF.showMenu()
    }

    catalogMenu.onmouseover = () => {
        catalogF.activeBtn()
        catalogF.showMenu()
    }

    catalogBtn.onmouseout = () => {
        catalogF.inactiveBtn()
        catalogF.hideMenu()
    }

    catalogMenu.onmouseout = () => {
        catalogF.inactiveBtn()
        catalogF.hideMenu()
    }

    catalogMenu.onclick = e => {
        if (e.target.classList.contains('popup')) {
            catalogF.inactiveBtn()
            catalogF.hideMenu()
        }
    }
} else {
    catalogBtnLink.onclick = function (e) {
        e.preventDefault()
    }

    catalogBtn.onclick = function () {
        if (!this.classList.contains('active')) {
            $(catalogMenu).slideDown()
            this.classList.add('active')
        } else {
            $(catalogMenu).slideUp()
            this.classList.remove('active')
        }
    }

    // document.onclick = e => {
    //     if (catalogBtn.classList.contains('active') && e.target !== catalogBtn && e.target !== catalogMenu && e.target !== catalogBtnLink) {
    //         catalogMenu.classList.remove('active')
    //         catalogBtn.classList.remove('active')
    //     }
    // }
}

export { catalogF, catalogBtn, catalogMenu }
