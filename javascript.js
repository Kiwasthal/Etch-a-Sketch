//Creating all parts of HTML using JS
const body = document.getElementsByTagName('body');
//Creating a header
const headerContainer = document.createElement('div') ;
const header = document.createElement('h1') ;
headerContainer.classList.add('headcont') ;
document.body.appendChild(headerContainer) ;
header.textContent = "Etch-a-Sketch" ;
headerContainer.appendChild(header) ;
//Creating a board to fit grid and interface
const board = document.createElement('div') ;
board.classList.add('board') ;
//Creating a  div to fit buttons
const holderLeft = document.createElement('div') ;
const holderRigt = document.createElement('div') ;
holderLeft.classList.add('holderLeft') ;
holderRigt.classList.add('holderRight') ;
//Right side buttons
//Change grid size and clear current grid
const clearButton = document.createElement('button') ;
const gridZero = document.createElement('button') ;
const gridOne = document.createElement('button') ;
const gridTwo = document.createElement('button') ;
const gridThree = document.createElement('button') ;
const gridFour = document.createElement('button') ;
//Right side buttons
clearButton.textContent = 'Clear' ;
gridZero.textContent = '16px' ;
gridOne.textContent = "32px" ;
gridTwo.textContent = "64px" ;
gridThree.textContent = "128px" ;
gridFour.textContent = "256px" ;
//Adding classes to all right side buttons
clearButton.classList.add('button')
gridZero.classList.add('button')
gridOne.classList.add('button')
gridTwo.classList.add('button')
gridThree.classList.add('button')
gridFour.classList.add('button')
//Appending left side buttons
holderLeft.appendChild(clearButton) ;
holderLeft.appendChild(gridZero) ;
holderLeft.appendChild(gridOne) ;
holderLeft.appendChild(gridTwo) ;
holderLeft.appendChild(gridThree) ;
holderLeft.appendChild(gridFour) ;
//Right side buttons
const colorBtn = document.createElement('button') ;
const greyBtn = document.createElement('button') ;
const eraseBtn = document.createElement('button') ;
const addBtn = document.createElement('button') ;
//Addin text to right side buttons
colorBtn.textContent = 'Colorful' ;
greyBtn.textContent = 'Grey' ;
eraseBtn.textContent = 'Eraser' ;
addBtn.textContent = 'Scaling' ;
//Addin classes to all right side buttons
colorBtn.classList.add('button')
greyBtn.classList.add('button')
eraseBtn.classList.add('button')
addBtn.classList.add('button')
//Appending right side buttons
holderRigt.appendChild(colorBtn) ;
holderRigt.appendChild(greyBtn) ;
holderRigt.appendChild(eraseBtn) ;
holderRigt.appendChild(addBtn)
//Creating div-container to store all etching boxes
const container = document.createElement('div')
container.classList.add('container');
//Appending children
document.body.appendChild(board) ;
board.appendChild(holderLeft) ;
board.appendChild(container) ;
board.appendChild(holderRigt) ;
container.classList.add('container'); //Append container 
//Create a footer
const footer = document.createElement('div')
footer.textContent = 'Copyright © Kiwasthal'
footer.classList.add('footer')
document.body.appendChild(footer)

//starting function
createGrid(16)

//Creates a function to produce grid

function createGrid(size) {
    for (let i = 0; i < size ; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row') ;
        let boxSize = 32/(size / 16) ;
            for (let y = 0 ; y <size ; y++){
                const divBox = document.createElement('div');
                divBox.classList.add('box') ;
                divBox.style.width = `${boxSize}px` ;
                divBox.style.height = `${boxSize}px` ;
                divBox.style.backgroundColor = 'white' ;
                divBox.addEventListener('mouseenter', function(e) {
                e.target.style.backgroundColor = 'black';
                })
                divRow.appendChild(divBox) ;
            }
        container.appendChild(divRow) ;
    }}

//Addin buttons that create differenc divs 

gridZero.addEventListener('click',() =>{ remove(16)}) ;
gridOne.addEventListener('click', () =>{ remove(32)}) ;
gridTwo.addEventListener('click', () =>{ remove(64)}) ;
gridThree.addEventListener('click', () =>{ remove(128)}) ;
gridFour.addEventListener('click', () =>{ remove(256)}) ;

//Function to create a new grid , removes all container content and uses the grid generator function

function remove(size) {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
    createGrid(size) 
}   
//Button listeners
//Changes all pixels to backgroundColor White

clearButton.addEventListener('click', function() {
    let pixel = document.querySelectorAll(".box") ;
    for (let i = 0; i< pixel.length ; i++) { 
    pixel[i].style.backgroundColor = 'white' ;
}})

colorBtn.addEventListener('click', colorful ) ;

greyBtn.addEventListener('click', gradient ) ;

eraseBtn.addEventListener('click', erase ) ;

addBtn.addEventListener('click', scale )


//Callback function to colorBtn event Listener  

function colorful() {
    let pixel = document.querySelectorAll(".box") ;
    for (let i = 0; i < pixel.length ; i++) {
        pixel[i].addEventListener('mouseenter', function() {
            let red = Math.floor(Math.random()*256) ;
            let green = Math.floor(Math.random()*256) ;
            let blue = Math.floor(Math.random()*256) ;
            pixel[i].style.backgroundColor = `rgb(${red},${green},${blue})` ;
        })
}}

//Used as a callback of eraseBtn

function erase(){
    let pixel = document.querySelectorAll(".box") ;
    for (let i = 0; i < pixel.length ; i++) {
        pixel[i].addEventListener('mouseenter', function() {
            pixel[i].style.backgroundColor = 'white' ;
        })
}}


//Callback for greyBtn

function gradient() {
    let start = 256
    let pixel = document.querySelectorAll(".box") ;
    for (let i = 0; i < pixel.length ; i++) {
        pixel[i].addEventListener('mouseenter', function(){
            for (y = 0 ; y <10 ; y++) {
                pixel[i].style.backgroundColor = `rgb(${start-25.6},${start-25.6},${start-25.6})`;
            }
        }
    )}}

//Callback for scaleColorBtn

function scale() {
        let pixel = document.querySelectorAll(".box") ;
        for (let i = 0; i < pixel.length ; i++) {
            pixel[i].addEventListener('mouseenter', addClasses) ;
        }}

//Callback for  scale function

        function addClasses(e){
            
        if (e.target.classList.contains('eight')) {
            e.target.classList.add('nine');
            e.target.style.backgroundColor = 'rgb(0, 0, 0)'
        } else if (e.target.classList.contains('seven')){
            e.target.classList.add('eight')
            e.target.style.backgroundColor = 'rgb(26, 26, 26)'
        } else if (e.target.classList.contains('six')){
            e.target.classList.add('seven') = 'rgb(52, 52, 52)'
            e.target.style.backgroundColor
        } else if (e.target.classList.contains('five')){
            e.target.classList.add('six')
            e.target.style.backgroundColor = 'rgb(78, 78, 78)'
        } else if (e.target.classList.contains('four')){
            e.target.classList.add('five')
            e.target.style.backgroundColor = 'rgb(104,104, 104)'
        } else if (e.target.classList.contains('three')){
            e.target.classList.add('four')
            e.target.style.backgroundColor = 'rgb(130, 130, 130)'
        } else if (e.target.classList.contains('two')){
            e.target.classList.add('three')
            e.target.style.backgroundColor = 'rgb(156, 156, 156)'
        } else if (e.target.classList.contains('one')){
            e.target.classList.add('two')
            e.target.style.backgroundColor = 'rgb(182, 182, 182)' ;
        } else if (e.target.classList.contains('zero')){
            e.target.classList.add('one')
            e.target.style.backgroundColor = 'rgb(208, 208, 208)' ; 
        } else {
            e.target.classList.add('zero')
            e.target.style.backgroundColor = 'rgb(234, 234, 234)' ;
        }
}

//Creating button animation


const buttons = document.querySelectorAll('.button')

function addBtnListener(array){
    for (i=0 ; i < array.length ;  i++ )  {
        array[i].addEventListener('mouseover', function(e){
            e.target.classList.add('playing')
        } )
    }
}

addBtnListener(buttons)

buttons.forEach( button => button.addEventListener('transitionend',removeTransition ));

function removeTransition(e){
    if (e.propertyName !== 'transform' ) return;
    console.log(this)
    this.classList.remove('playing')
}
