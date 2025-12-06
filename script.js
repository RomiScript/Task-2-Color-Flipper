let colorcode = document.querySelector('.colorcode');
let colorBox = document.querySelector('.colorgenerator');
let btn = document.querySelector('.btn');
let body = document.querySelector('.body');

let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function randomHex() {
    let code = "#";
    for (let i = 0; i < 6; i++) {
        code += hex[Math.floor(Math.random() * hex.length)];
    }
    return code;
}

btn.addEventListener('click', () => {
    const c1 = randomHex();
    const c2 = randomHex();

    colorcode.textContent = c1;
    body.style.background = `linear-gradient(to right, ${c1}, ${c2})`;
});

/* CLICK-TO-COPY */
colorBox.addEventListener('click', () => {
    navigator.clipboard.writeText(colorcode.textContent);

    colorBox.classList.add("copied");
    setTimeout(() => colorBox.classList.remove("copied"), 700);
});
