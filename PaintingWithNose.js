let canvas;
let videoInput;
let clearAction = document.getElementById('btn_clear');

function setup() {
  // setup canvas
  canvas = createCanvas(800, 600);
  canvas.parent('myContainer');
  canvas.position('50% ', '50%');
  

  // setup video input
  videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.parent('myContainer');

  // setup face tracker
  tracker = new clm.tracker();
  tracker.init();
  tracker.start(videoInput.elt);
}

function draw() {
  // definir las posiciones del facetracker  nariz
  const nosePosition = 34;  // en mi caso le resto 37-3 por mi centrado del canvas
  const allPositions = tracker.getCurrentPosition();
  //console.log(allPositions); veo por consola los arrays con las coordenadas

  // definir el color de nuestro circulo
  fill(random(255), random(255), random(255));

  //si queremos definir un tamaño randon de los curculos que pinto en vez de 20, 20 en el if puedo crear:
  // const esize = random(30)

  //pintar con mi nariz
  if (allPositions) {
    if (allPositions) {
      ellipse(
        allPositions[nosePosition][0],
        allPositions[nosePosition][1],
        20,
        20
      );
    }
  }

  // una funcion para borrar lo que pintemos
  clearAction.onclick = function () {
    clear();
  };
}
