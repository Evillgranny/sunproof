import { popups } from "../../view/modalsV/popupsModalV";

let popupsF = popups

popups.forEach(i => {
    i.onclick = function (e) {
        if (e.target.classList.contains('popup')) {
            this.classList.remove('show')
        }
    }
})

export { popupsF }
