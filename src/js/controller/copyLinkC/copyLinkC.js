import { copyLinks } from "../../view/copyLinkV/copyLinkV";
import { CopyLink } from "../../model/CopyLink/copyLink";

const copyF = new CopyLink()

copyLinks.forEach(i => {
    i.onclick = e => {
        copyF.copyClick(e)
        i.classList.add('active')
    }
})

export { copyF }
