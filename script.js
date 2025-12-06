let colorcode = document.querySelector('.colorcode');
let btn = document.querySelector('.btn');
let body = document.querySelector('.body');


let dec = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', function(){
    let code = '#';
    let newcode = '#';

    for (let i=0; i<6; i++){
        code += dec[Random()];
    }
    for (let i=0; i<6; i++){
        newcode += dec[Random()];
    }
    colorcode.innerHTML = code;
    body.style.background = 'linear-gradient(to right, '+code+', '+newcode+')';
})

function Random(){
    return Math.floor(Math.random() * dec.length);
}