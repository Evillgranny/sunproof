import { FileInput } from "../../model/FileInput/FileInput";
import { fileInputText, fileInput } from "../../view/fileInputV/fileInputV";

let input  = new FileInput(fileInput, fileInputText)
input.inputValue()

export { input }
