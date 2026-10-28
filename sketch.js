//Criando  Classe Bird e Seus Métodos
//Criando flap bird e seus métodos
//método 01 exibe()
//metodo 02 update()
// metodo 03 up
//inserindo imagem bird

let bird;
let birdimagem

async function setup() {
  createCanvas(400, 400);
  birdimagem = await loadImage('bird.png')
  bird = new Bird(25,width/2,birdimagem)
  
}
