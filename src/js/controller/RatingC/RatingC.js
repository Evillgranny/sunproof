import { Rating } from "../../model/Rating/Rating";
import { rating, ratingNumber, ratingIn, hiddenInput } from "../../view/ratingV/ratingV";

let ratingF = false

if (rating) {
    ratingF = new Rating(rating, ratingNumber, ratingIn, hiddenInput)
    rating.onclick = e => {
        console.log(e.offsetX)
        ratingF.updateRating(e.offsetX)
    }
}

export { ratingF }
