class FileInput {
    constructor(input, textBlock) {
        this.input = input
        this.text = textBlock
    }

    inputValue () {
        this.input.oninput = () => {
            this.input.value ? this.text.textContent = this.input.files[0].name : false
        }
    }
}

export { FileInput }
