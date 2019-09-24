let img;

function preload() {
  img = loadImage('map.jpeg');
}

function setup(){
  let cvn = createCanvas(300, 300);
  cvn.parent('jumbo-canvas')
    // // background(255, 30, 200)

}


function draw() {
  background(69, 52, 48)
image(img, mouseX-400, mouseY-300);

 
}