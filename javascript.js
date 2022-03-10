//Creating all parts of HTML using JS
const body = document.getElementsByTagName('body');
//Creating a board to fit grid and interface
const board = document.createElement('div')
board.classList.add('board')
//Creating a  div to fit buttons
const holderLeft = document.createElement('div')
holderLeft.classList.add('holderLeft')
//Creating buttons
const clearButton = document.createElement('button')
clearButton.textContent = 'Clear'
holderLeft.appendChild(clearButton)
//Creating div-container to store all etching boxes
const container = document.createElement('div')
container.classList.add('container');
//Appending children
document.body.appendChild(board)
board.appendChild(holderLeft)
board.appendChild(container);

container.classList.add('container');
// Append container to body 



//Creates a function to produce grid

function createGrid(size) {
    for (let i = 0; i < size ; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row')
        let boxSize = 32/(size / 16)
            for (let y = 0 ; y <size ; y++){
                const divBox = document.createElement('div');
                divBox.classList.add('box')
                divBox.style.width = `${boxSize}px`
                divBox.style.height = `${boxSize}px`
                divBox.style.backgroundColor = 'white'
                divBox.addEventListener('mouseenter', function(e) {
                    e.target.style.backgroundColor = 'black';
                })
                divRow.appendChild(divBox)
            }
        container.appendChild(divRow)
    }}

    //Create a function to clear grid with button click


createGrid(16)

    let pixel = document.querySelectorAll(".box")
console.log(pixel)

clearButton.addEventListener('click', function() {
    for (let i = 0; i< pixel.length ; i++) {
    pixel[i].style.backgroundColor = 'white'
}})