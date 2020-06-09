class Rating {
    constructor(rating, number, ratingIn, hiddenInput) {
        this.number = number
        this.rating = rating
        this.ratingIn = ratingIn
        this.hiddenInput = hiddenInput
        this.ratingWidth = this.rating.offsetWidth
        this.ratingPercent = this.ratingWidth / 100
    }

    updateRating (coords) {
        let number = 0
        let currentNumber = coords / this.ratingPercent

        if (currentNumber < 21)
            number = 1
        else if (currentNumber > 20 && currentNumber < 41)
            number = 2
        else if (currentNumber > 40 && currentNumber < 61)
            number = 3
        else if (currentNumber > 60 && currentNumber < 81)
            number = 4
        else if (currentNumber > 80)
            number = 5

        this.ratingIn.style.width = number * 20 + '%'
        this.number.textContent = number
        this.hiddenInput.value = number
    }
}

export { Rating }
