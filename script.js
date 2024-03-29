
// opções
let optionsButtons = document.querySelectorAll('.option-button')
let advancedOptionButton = document.querySelectorAll('.adv-option-button')

// edição das fontes e seus tamanhos
let fontName = document.getElementById('fontName') 
let fontSizeRef = document.getElementById('fontSize')

// area de scrita e linkando botoes
let writingArea = document.getElementById('text-input')
let linkButton = document.getElementById('createLink')

// edição de botoes
let alignButtons = document.querySelectorAll('.align')
let spacingButtons = document.querySelectorAll('.spacing')
let formatButtons = document.querySelectorAll('.format')
let scriptButtons = document.querySelectorAll('.script')

// listando os nomes das fontes disponiveis 
let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
]

const initializer = () => {

    // highlighter(className, needsRemoval)
    highlighter(alignButtons, true)
    highlighter(spacingButtons, true)
    highlighter(formatButtons, false)
    highlighter(scriptButtons, true)
    

    // ### OPÇÃO DE FONTE 
    // criando o elemento "option" no HTML e o agregando a "fontName"

    fontList.map((value) => {
        let option = document.createElement('option')
        option.value = value
        option.innerHTML = value
        fontName.appendChild(option)
    })

    // "for" passando pelas 7 opçoes de fontes disponiveis
    for(let i = 1; i <= 7; i++) {

        let option = document.createElement('option')
        option.value = i
        option.innerHTML = i
        fontSizeRef.appendChild(option)
    }

    fontSizeRef.value = 3
}

// modificando o texto
const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value)
}

// validando se o botão foi assionado
optionsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) => {
    button.addEventListener('change', () => {
        modifyText(button.id, false, button.value)
    })
})

linkButton.addEventListener('click', () => {

    let userLink = prompt('Enter a URL?')

    if(/http/i.test(userLink)) {
        modifyText(linkButton.id, false, userLink)

    } else {
        userLink = 'http://' + userLink
        modifyText(linkButton.id, false, userLink)
    }
})


const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener('click', () => {
            
            if(needsRemoval) {

                let alreadyActive = false

                if(button.classList.contains('active')) {
                    alreadyActive = true
                }

                highlighterRemover(className)

                if(!alreadyActive) {
                    button.classList.add('active')
                }

            } else {
                button.classList.toggle('active')
            }
        })
    })
}

const highlighterRemover = (className) => {

    className.forEach((button) => {
        button.classList.remove('active')
    })
}

window.onload = initializer()