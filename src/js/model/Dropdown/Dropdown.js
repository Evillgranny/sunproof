class Dropdown {
    constructor(btn, container) {
        this.container = container

        this.container.style.display = 'block'
        this.container.style.height = 'auto'

        this.height = this.container.clientHeight

        this.container.style.display = 'none'
        this.container.style.height = '0'
    }

    ddOpen () {
        if (!this.container.classList.contains('move')) {
            this.container.classList.add('move')

            let counter = 0,
                step = this.height / 20

            this.container.style.display = 'block'

            let interval = setInterval(() => {
                if (counter < this.height) {
                    counter += step
                    this.container.style.height = counter+'px'
                } else {
                    clearInterval(interval)
                    this.container.classList.remove('move')
                }
            }, 20)
        }
    }

    ddClose () {
        if (!this.container.classList.contains('move')) {
            this.container.classList.add('move')

            let counter = this.height,
                step = this.height / 24

            this.container.style.display = 'block'

            let interval = setInterval(() => {
                if (counter > 0) {
                    counter -= step
                    this.container.style.height = counter+'px'
                } else {
                    clearInterval(interval)
                    counter = 0
                    this.container.style.height = counter
                    this.container.style.display = 'none'
                    this.container.classList.remove('move')
                }
            }, 20)
        }
    }
}

export {Dropdown}
