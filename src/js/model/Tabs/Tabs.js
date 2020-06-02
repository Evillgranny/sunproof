class Tabs {
    constructor(tabs, containers) {
        this.tabs = tabs
        this.containers = containers

        if ( this.tabs.length > 0 ) {
            this.tabs[0].classList.add('active')
            this.containers[0].classList.add('active')
        }
    }

    tabClick () {
        this.tabs.forEach(i => {
            i.onclick = (e) => {
                e.preventDefault()
                let currentData = i.getAttribute('data-navigation')
                let currentId = i.getAttribute('href')
                let closeBlocks = document.querySelectorAll( `div[data-navigation="${currentData}"]`)
                let showBlock = document.querySelector(currentId)
                let allBtns = document.querySelectorAll(`a[data-navigation="${currentData}"]`)

                allBtns.forEach(j => {
                    j.classList.remove('active')
                })

                closeBlocks.forEach(j => {
                    j.classList.remove('active')
                })

                i.classList.add('active')
                showBlock.classList.add('active')
            }
        })
    }
}

export { Tabs }
