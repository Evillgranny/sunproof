import $ from 'jquery'

class RightDots {
    constructor(dotsContainer, sections, dotClass) {
        this.dotsContainer = dotsContainer
        this.sections = sections
        this.dotClass = dotClass
        this.dotsArray = []
        this.sectionsArray = Array.prototype.slice.call(this.sections)
        this.max =  this.sectionsArray.length -1
    }

    dotsToDOM () {
        this.sections.forEach((i, index) => {
            let dot = document.createElement('div')
            dot.classList.add(this.dotClass)

            index === 0 ? dot.classList.add('active') : false

            dot.onclick = () => {
                document.querySelector('.active' + '.' + this.dotClass).classList.remove('active')
                dot.classList.add('active')

                $('html').animate({ scrollTop: $(this.sections[index]).offset().top - 139 }, 500)
            }

            this.dotsArray.push(dot)
        })

        this.dotsArray.forEach(i => {
            this.dotsContainer.append(i)
        })


        window.onscroll = () => {
            let currentIndex = this.sectionsArray.findIndex((i, index) => i.getBoundingClientRect().top > 139)
            currentIndex === -1 ? currentIndex = this.max : false
            document.querySelector('.active' + '.' + this.dotClass).classList.remove('active')
            this.dotsArray[currentIndex].classList.add('active')
        }
    }
}

export { RightDots }



