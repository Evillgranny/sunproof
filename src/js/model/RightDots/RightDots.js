import $ from 'jquery'

class RightDots {
    constructor(dotsContainer, sections, dotClass, blackBg, blackBgClass) {
        this.dotsContainer = dotsContainer
        this.sections = sections
        this.dotClass = dotClass
        this.dotsArray = []
        this.sectionsArray = Array.prototype.slice.call(this.sections)
        this.max =  this.sectionsArray.length -1
        this.blackBg = blackBg
        this.blackBgClass = blackBgClass
    }

    dotsToDOM () {
        this.sections.forEach((i, index) => {
            let dot = document.createElement('div')
            dot.classList.add(this.dotClass)

            this.blackBg.length > 0 && dot.classList.add(this.blackBgClass)

            index === 0 ? dot.classList.add('active') : false

            dot.onclick = () => {
                document.querySelector('.active' + '.' + this.dotClass).classList.remove('active')
                dot.classList.add('active')

                $('html').animate({ scrollTop: $(this.sections[index]).offset().top - 99 }, 500)
            }

            this.dotsArray.push(dot)
        })

        this.dotsArray.forEach(i => {
            this.dotsContainer.append(i)
        })


        window.onscroll = () => {
            let currentIndex = this.sectionsArray.findIndex((i, index) => i.getBoundingClientRect().top > 99)
            currentIndex === -1 ? currentIndex = this.max : false
            document.querySelector('.active' + '.' + this.dotClass).classList.remove('active')
            this.dotsArray[currentIndex].classList.add('active')
        }
    }
}

export { RightDots }



