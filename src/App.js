let optionButtons = document.querySelectorAll("option-button")
let advancedOptionButton = document.querySelectorAll(".adv-option-button")

let fontName = document.getElementById("fontName")
let fontSizeRef = document.getElementById("fontSize")
let whitingArea = document.getElementById("text-input")

let linkButton = document.getElementById("createLink")
let alignButton = document.querySelectorAll(".align")

let spacingButtons = document.querySelectorAll(".spacing")
let formatButtons = document.querySelectorAll(".format")
let scriptButtons = document.querySelectorAll(".script")

// list of fontlist

let fontlist = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
]

const initializer = () => {
    // calls for highlighting buttons
    //
    // no highlighting for link, ulink, lists, undo, redo 
    // [ since they are ne time operation ] 

    highlighter(alignButton, true)
    highlighter(spacingButtons, true)
    highlighter(formatButtons, false)
    highlighter(scriptButtons, true)
}

// highlight clicked button
const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click", () => {

            if(needsRemoval){
            let alreadyActive = false;

                if (button.classList.contains("active")) {
                    alreadyActive = true;
                }

                // remove highlight from other buttons
                highlighterRemover(className)

                if (!alreadyActive) {
                    button.classList.add("active")
                }
            } 
            
            else {
                button.classList.toggle("active")
            }
        }) 
    })
} 

const highlighterRemover = (className) => {
    className.forEach((button) => {
        button.classList.remove("active")
    })
}

window.onload = initializer()



