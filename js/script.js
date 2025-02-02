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
                if(secondPlayer == 'ia-player'){
                    //funcao para executar jogada
                    computerPLay();
                    player2++;
                }
            } else {
                player2 ++;
            }
        }
        //checa quem venceu
        checkwinConition()
    });
}
//evento para saber se é 2 player ou IA
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        secondPlayer = event.target.getAttribute('id'); // Aqui usamos event.target
        for(let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = 'none';
        }
        setTimeout(() => {
            const container = document.querySelector('#container');
            container.classList.remove('hide');
        }, 500)
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

//ve qurem ganha

function checkwinConition() {
    const b1 = document.getElementById('block-1');
    const b2 = document.getElementById('block-2');
    const b3 = document.getElementById('block-3');
    const b4 = document.getElementById('block-4');
    const b5 = document.getElementById('block-5');
    const b6 = document.getElementById('block-6');
    const b7 = document.getElementById('block-7');
    const b8 = document.getElementById('block-8');
    const b9 = document.getElementById('block-9');

    //horizontal
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        const b1Child = b1.childNodes[0].className;
        const b2Child = b2.childNodes[0].className;
        const b3Child = b3.childNodes[0].className;
        if(b1Child == 'x' && b2Child =='x' && b3Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b1Child == 'o' && b2Child =='o' && b3Child == 'o') {
            //o
            dlecareWinner('o')

        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        const b4Child = b4.childNodes[0].className;
        const b5Child = b5.childNodes[0].className;
        const b6Child = b6.childNodes[0].className;
        if(b4Child == 'x' && b5Child =='x' && b6Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b4Child == 'o' && b5Child =='o' && b6Child == 'o') {
            //o
            dlecareWinner('o')
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        const b7Child = b7.childNodes[0].className;
        const b8Child = b8.childNodes[0].className;
        const b9Child = b9.childNodes[0].className;
        if(b7Child == 'x' && b8Child =='x' && b9Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b7Child == 'o' && b8Child =='o' && b9Child == 'o') {
            //o
           dlecareWinner('o')


        }
    }

    //vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        const b1Child = b1.childNodes[0].className;
        const b4Child = b4.childNodes[0].className;
        const b7Child = b7.childNodes[0].className;
        if(b1Child == 'x' && b4Child =='x' && b7Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b1Child == 'o' && b4Child =='o' && b7Child == 'o') {
            //o
           dlecareWinner('o')

        }
    }
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        const b1Child = b1.childNodes[0].className;
        const b4Child = b4.childNodes[0].className;
        const b7Child = b7.childNodes[0].className;
        if(b1Child == 'x' && b4Child =='x' && b7Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b1Child == 'o' && b4Child =='o' && b7Child == 'o') {
            //o
           dlecareWinner('o')

        }
    }
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        const b2Child = b2.childNodes[0].className;
        const b5Child = b5.childNodes[0].className;
        const b8Child = b8.childNodes[0].className;
        if(b2Child == 'x' && b5Child =='x' && b8Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b2Child == 'o' && b5Child =='o' && b8Child == 'o') {
            //o
           dlecareWinner('o')

        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        const b3Child = b3.childNodes[0].className;
        const b6Child = b6.childNodes[0].className;
        const b9Child = b9.childNodes[0].className;
        if(b3Child == 'x' && b6Child =='x' && b9Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b3Child == 'o' && b6Child =='o' && b9Child == 'o') {
            //o
           dlecareWinner('o')

        }
    }
    //diagonal

    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        const b1Child = b1.childNodes[0].className;
        const b5Child = b5.childNodes[0].className;
        const b9Child = b9.childNodes[0].className;
        if(b1Child == 'x' && b5Child =='x' && b9Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b1Child == 'o' && b5Child =='o' && b9Child == 'o') {
            //o
           dlecareWinner('o')

        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        const b3Child = b3.childNodes[0].className;
        const b5Child = b5.childNodes[0].className;
        const b7Child = b7.childNodes[0].className;
        if(b3Child == 'x' && b5Child =='x' && b7Child == 'x') {
           //x 
           dlecareWinner('x')
        } else if(b3Child == 'o' && b5Child =='o' && b7Child == 'o') {
            //o
           dlecareWinner('o')

        }
    }

    //deu velha
    let count = 0;

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            count++;
        }
    }

    if(count == 9) {
        dlecareWinner('Deu velha')
    }
}

//Limpa o jogo, delcara o vencedor e atualiza o placar
function dlecareWinner(winner) {
    let scorebordX = document.querySelector('#scoreboard-1');
    let scorebordY = document.querySelector('#scoreboard-2');
    let msg = '';
    if (winner == 'x') {
        scorebordX.textContent = parseInt(scorebordX.textContent) + 1;
        msg = 'Jogado 1 venceu!';
    } else if (winner == 'y') {
        scorebordY.textContent = parseInt(scorebordY.textContent) + 1;
        msg = 'Jogado 2 venceu!';
    } else {
        msg = 'Deu velha!';
    }

     //exibir menssagem
    messageText.innerHTML = msg;
    message.classList.remove('hide');

    //esconde msg
    setTimeout(() => {
        message.classList.add('hide');
    }, 3000)

    //zera jogada
    player1 = 0
    player2 = 0;

    //remove x e O
    const boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function computerPLay() {
    let emptyBoxes = [];

    // Verifica todas as caixas e adiciona as vazias à lista
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes.length == 0) {
            emptyBoxes.push(boxes[i]);
        }
    }

    // Escolhe uma caixa vazia aleatória
    if (emptyBoxes.length > 0) {
        let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
        let chosenBox = emptyBoxes[randomIndex];

        // Clona o elemento "O" e o adiciona à caixa escolhida
        let cloneO = o.cloneNode(true);
        chosenBox.appendChild(cloneO);
    }
}