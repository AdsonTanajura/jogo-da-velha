const x = document.querySelector(".x");
const o = document.querySelector(".o");
const boxes = document.querySelectorAll(".box");
const buttons = document.querySelectorAll("#button-container button");
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
        let el = checkEL(player1, player2);
        
        //verifica se ja tem x ou bola
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);
            //computar jogada
            if(player1 == player2) {
                player1 ++;
            } else {
                player2 ++;
            }
        }
    });
}

//ver quem vai jogar
function checkEL (p1, p2) {
    if(p1 === p2) {
        //x
        el = x;
    } else {
        //o
        el = o;
    }

    return el;
}