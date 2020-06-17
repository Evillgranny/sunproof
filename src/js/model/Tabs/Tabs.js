class Tabs {
    tabClick (event, tab) {
        event.preventDefault()
        let currentData = tab.getAttribute('data-navigation')
        let currentId = tab.getAttribute('href')
        let closeBlocks = document.querySelectorAll( `div[data-navigation="${currentData}"]`)
        let showBlock = document.querySelector(currentId)
        let allBtns = document.querySelectorAll(`a[data-navigation="${currentData}"]`)

        allBtns.forEach(j => {
            j.classList.remove('active')
        })

        closeBlocks.forEach(j => {
            j.classList.remove('active')
        })

        tab.classList.add('active')
        showBlock.classList.add('active')
    }
}

export { Tabs }
