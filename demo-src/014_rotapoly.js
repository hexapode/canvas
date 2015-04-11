function setup() {
  size(640, 360);
}

function draw() {
  background(102);
  
  fill(242);
  stroke(89);
  pushMatrix();
  translate(width*0.2, height*0.5);
  rotate(frameCount / 200.0);
  polygon(0, 0, 82, 3); 
  popMatrix();
  
  pushMatrix();
  translate(width*0.5, height*0.5);
  rotate(frameCount / 50.0);
  polygon(0, 0, 80, 20); 
  popMatrix();
  
  pushMatrix();
  translate(width*0.8, height*0.5);
  rotate(frameCount / -100.0);
  polygon(0, 0, 70, 7); 
  popMatrix();
}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}