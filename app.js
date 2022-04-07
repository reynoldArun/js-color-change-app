const mainBtn = document.querySelector('.main__btn')
const headerBtn = document.querySelector('.header__btn')
const input = document.querySelector('.header__input')
const code = document.querySelector('.color-code')

let hexColor = [1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"]


headerBtn.addEventListener('click', () => {
    code.textContent = input.value;
    document.body.style.background = input.value;
    input.value = ''
})


mainBtn.addEventListener('click', () => {
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        hex += hexColor[RandomNumber()]
    }
    code.textContent = hex;
    document.body.style.background = hex;
    input.value = ''
    
})

function RandomNumber() {
    return Math.floor(Math.random() * hexColor.length)
}











