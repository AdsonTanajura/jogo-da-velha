const x = document.querySelector(".x");
const o = document.querySelector(".o");
const boxes = document.querySelectorAll(".box");
const buttons = document.querySelectorAll(".#button-container button");
const message = document.querySelector('#message');
const messageText = document.querySelector('#message p');
let secondPlayer;


//contador de jogadas
let player1 = 0;
let player2 = 0;

//adicionando o vento de click ao boxes

for(let i = 0; i < boxes.length; i++) {
    // quando alguem clica na caixa;
    boxes[i].addEventListener('click', function() {
        let el;
        if(player1 === player2) {
            //x
            el = x;
        } else {
            //o
            el = o;
        }
        let cloneEl = el.cloneNode(true);
        this.appendChild(cloneEl);
    });
}
