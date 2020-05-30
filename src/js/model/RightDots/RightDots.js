class RightDots {
    constructor(dotsContainer, sections, dotClass) {
        this.dotsContainer = dotsContainer
        this.sections = sections
        this.dotClass = dotClass
        this.dotsArray = []
        this.sectionsArray = Array.prototype.slice.call(this.sections)
    }

    dotsToDOM () {
        this.sections.forEach((i, index) => {
            let dot = document.createElement('div')
            dot.classList.add(this.dotClass)

            index === 0 ? dot.classList.add('active') : false

            let top = this.sections[index].offsetTop - 140



            dot.onclick = () => {
                document.querySelector('.active' + '.' + this.dotClass).classList.remove('active')
                dot.classList.add('active')
                window.scrollTo({
                    top,
                    left: 0,
                    behavior: "smooth"
                })
            }

            this.dotsArray.push(dot)
        })

        this.dotsArray.forEach(i => {
            this.dotsContainer.append(i)
        })

        window.onscroll = () => {
            let currentIndex = this.sectionsArray.findIndex((i, index) => i.offsetTop > pageYOffset)
            document.querySelector('.active' + '.' + this.dotClass).classList.remove('active')
            this.dotsArray[currentIndex].classList.add('active')
        }
    }
}

export { RightDots }
