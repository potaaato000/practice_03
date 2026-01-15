let spacing = 20;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for(let x = 0; x < width; x = x + mouseX + 1 ){
    for(let y=0; y < height; y = y + mouseX + 1){
  fill(random(100,250));
  rect(x, y, 50, 50);
    
   }
  }

}