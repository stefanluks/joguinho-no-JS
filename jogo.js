class Player {
    constructor(b, moveBranco, moveAzul, moveVerde) {
        this.nome = ''
        this.animaB = moveBranco;
        this.animaA = moveAzul;
        this.animaV = moveVerde;
        this.b = b;
    }
    desenhar() {
        if (this.b == 140) {
            this.nome = 'Venty Quad'
            bgCor = 'blue'

            fill('white');
            rect(80, 200, 50, 50)
            rect(70, 190 + this.animaB, 20, 20); //anima
            rect(70, 240, 20, 10);
            rect(120, 240, 20, 10);
            rect(120, 198 - this.animaB, 20, 20); //anima
            fill('black')
            rect(95, 205, 20, 20)
            fill('red')
            rect(100, 210, 10, 10)
        } else if (this.b == 190) {
            this.nome = 'Aqua Master';
            fill('blue');
            rect(65 + this.animaA, 175, 25, 25);
            rect(80, 200, 50, 50);

            fill('white');
            rect(85, 205, 10, 10);
            rect(115, 205, 10, 10);
        } else {
            bgCor = 'yellow';
            this.nome = 'PL-anty'
            fill('green');
            rect(80, 200, 50, 50)
        }
        textSize(22);
        textFont('Georgia');
        text(this.nome, 40 + this.animaB, 150);
    }
}

class Tela {
    constructor(nome, personagem) {
        this.personagem = personagem;
        this.nome = nome;
    }
    exibir() {
        if (this.nome == 'menu') {
            //desenhar a tela menu aqui!
            bgCor = 'blue';
            fill('white');
            rect(20, 10, 360, 50);
            rect(20, 170, 360, 50);
            fill('red');
            text('QUADRADO', 135, 40);
            textSize(22);
            textFont('Georgia');
            text(nome, 40, 200);
            text(play, 20, 250);
        }
        if (this.nome == 'personalisar') {
            bgCor = 'red';
            var eu = new Player(b, moveBranco, moveAzul, moveVerde);
            fill('black');
            rect(260, 130, 100, 160);
            fill('white');
            rect(20, 10, 360, 50);
            fill('red');
            textSize(22);
            textFont('Georgia');
            text(nome + ' escolha um personagem', 50, 40);
            fill('black');
            textSize(12);
            //text(play, 100, 250);
            text(eu.nome, 80, 80)
            text('ESC para voltar                                                            Enter para selecionar', 10, 380);
            fill('white');
            rect(280, 150, 10, 10);
            text('branco', 300, 160);
            fill('blue');
            rect(280, 200, 10, 10);
            text('Azul', 300, 210);
            fill('green');
            rect(280, 250, 10, 10);
            text('verde', 300, 260);

            //seletor
            noFill();
            stroke('red');
            rect(a, b, 80, 30);
            stroke('black')
            eu.desenhar();
        }
        if (this.nome == 'personagem') {
            bgCor = 'gray';
            eu = new Player(b, 0, 0, 0);
            fill('black');
            textSize(12);
            //text(eu.nome, 80, 80)
            text('ESC para voltar                                                            Enter para selecionar', 10, 380);
            eu.desenhar();
        }
    }
}
var tela = new Tela('menu');

var a = 270;
var b = 140;
//var eu = new Player(b);

function setup() {
    createCanvas(400, 400);
    background(bgCor);
    frameRate(15);

}
var play = '            DIGITE SEU NOME E\nAPERTE ENTER PARA COMEÇAR';
var bgCor = 'blue';
var nome = 'stefan';
var moveBranco = 0;
var branco = 0;
var moveAzul = 0;
var azul = 0;
var moveVerde = 0;
var verde = 0;

function draw() {
    background(bgCor);
    if (moveBranco < 10) {
        moveBranco++;
    }
    if (moveBranco == 10) {
        moveBranco = 0;
    }

    tela.exibir();
}

var ant = ''

function keyPressed() {
    if (tela.nome == 'menu') {
        if (keyCode === RETURN) {
            if (tela.nome == 'menu') {
                tela.nome = 'personalisar';
            }
        } else {
            if (keyCode === BACKSPACE) {
                let ult = nome.substr(nome.length - 1);

                let novo = nome.replace(ult, '');
                nome = novo;
            } else {
                if ((keyCode < 65 || keyCode > 90)) {
                    alert('apenas letras');
                } else {
                    nome += str(key);
                }
            }
        }
    } else if (tela.nome == 'personalisar') {
        if (keyCode === ESCAPE) {
            tela.nome = 'menu';
        } else if (keyCode === 40) {
            if (b == 140) {
                b = 190;
            } else if (b == 190) {
                b = 240;
            }
        } else if (keyCode === 38) {
            if (b == 240) {
                b = 190;
            } else if (b == 190) {
                b = 140;
            }
        } else if (keyCode == RETURN) {
            tela.personagem = b;
            tela.nome = 'personagem';
        }
    } else if (tela.nome == 'personagem') {
        if (keyCode === ESCAPE) {
            tela.nome = 'personalisar';
        } else if (keyCode === RETURN) {
            tela.nome = 'fase1';
        }
    } else if (tela.nome == 'fase1') {
        if (keyCode === ESCAPE) {
            tela.nome = 'personalisar';
        } else if (keyCode === RETURN) {
            tela.nome = 'fase2';
        }
    }
}