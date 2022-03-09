//Creating all parts of HTML using JS
const body = document.getElementsByTagName('body');
//Creating dov-container to store all divs 
const container = document.createElement('div')
container.classList.add('container');
console.log(container);
// Append container to body 
document.body.appendChild(container);

//Creates a function that takes height(x), width(y) and creates a grid based on those parameters 

function gridSize(x,z){
for (i= 0; i < x ; i++) {
    let divcontainer = document.createElement('div')   
        divcontainer.classList.add('sktetchRow')  
        container.appendChild(divcontainer)   
        for (y = 0; y < z ; y++) {
            let divchild = document.createElement('div')
            divchild.classList.add('sketchBox')
            divcontainer.appendChild(divchild)
        }    
}}

gridSize(20,20)

