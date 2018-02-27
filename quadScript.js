//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k=20;

function init() {
  canvas= document.getElementById("mycanvas");
  ctx= canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context',w);
  canvasOffset = canvas.getBoundingClientRect();
  offsetX = Math.round(canvasOffset.left),
  offsetY = Math.round(canvasOffset.top); 
  canvas.addEventListener("mousemove", doMouseMove, false);
  graphpaper();
  QF();

}  // close init


function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  d=b**2-4*a*c;
  if (d<0) {
    $("#solution1").text("No x-intercepts"); 
    $("#solution2").text("No x-intercepts"); 
  }
  else { 

  x1 = (-b +Math.sqrt(b**2 - 4*a * c)) / (2*a);
  x1= Math.round(x1*100)/100;
  x2 = (-b -Math.sqrt(b**2 - 4*a * c)) / (2*a);
  x2= Math.round(x2*100)/100;
  $("#solution1").text("X Interceot is at "+x1);
  $("#solution2").text("X Interceot is at "+x2);
}

 ctx.beginPath();
 ctx.fillStyle= "black";
  ctx.arc(w/2+x1*k,h/2,10,0,6.28);
  ctx.fill();

   ctx.beginPath();
  ctx.arc(w/2+x2*k,h/2,10,0,6.28);
  ctx.fill();
    console.log(a,b,c);
    results(); 
    graphpaper(); 
    graphQuad();

}  // close QF
function zoomIn() {
k=k+3; 
resetCanvas(); 
}

function zoomOut() {
k=k-3;
if (k<3){ k =
 3}
resetCanvas();
}

function resetCanvas() {
  init();
  graphQuad();
  results();
  QF();
}










function doMouseMove(event) {
    // always know where ther mouse is locate
  resetCanvas();
  mouseX = event.clientX-offsetX;
  mouseY = event.clientY-offsetY;
  pointX = (mouseX-w/2)/k;
  pointY = a*Math.pow(pointX,2)+b*pointX+c*1;
  pointX =  pointX.toFixed(2);
  pointY =  pointY.toFixed(2);
  //console.log(mouseX,mouseY, pointX, pointY, offsetY, offsetX);
  ctx.fillStyle= "purple";
  ctx.beginPath();
  ctx.arc(mouseX,h/2-pointY*k,5,0,2*Math.PI);
  ctx.fill(); 
  $("#point").text("Point on the curve: ("+pointX+","+pointY+")");
}  // end doMouseMove



function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  $("#vertex").text("Vertex is at (" + vX+","+vY+")");
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.arc(w/2+vX*k,h/2-vY*k,10,0,6.28);
  ctx.fill();
  $("#y-int").text(" Y intercept is at (0,"+ c +")");
  ctx.fillStyle="gray";
  ctx.beginPath();
  ctx.arc(w/2,h/2-c*k,10,0,6.28);
  ctx.fill();
  Xcp = 2*vX; 
  $("#cp").text ("corr. Pt is at ("+Xcp+","+c+")"); 
  ctx.fillStyle= "blue";
ctx.beginPath();
  ctx.arc(w/2+2*vX*k,h/2-c*k,10,0,6.28);
  ctx.fill();
    $("#sym").text ("symmetry line is at x= "+vX);

}  // close results()

function graphpaper() {
  // the x and y axis drawn
  ctx.lineWidth= 2; 
  ctx.beginPath();
  ctx.moveTo(w/2,0);
  ctx.lineTo(w/2,h); 
  ctx.stroke(); 

  ctx.beginPath();
  ctx.moveTo(0,h/2);
  ctx.lineTo(w,h/2); 
  ctx.stroke(); 

  // thin line with a 50% opacity using rgba() 
  ctx.strokeStyle="rgba(0,0,255,.2)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<h/(2*k); i++) {
    ctx.beginPath();
    ctx.moveTo( 0, h/2-i*k );
    ctx.lineTo( w, h/2-i*k );
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo( 0, h/2+i*k );
    ctx.lineTo( w, h/2+i*k );
    ctx.stroke();


  }
for (i=0; i<w/(2*k); i++) {
    ctx.beginPath();
    ctx.moveTo( w/2-i*k,0 );
    ctx.lineTo( w/2-i*k, w );
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo( w/2+i*k, 0 );
    ctx.lineTo( w/2+i*k, h );
    ctx.stroke();
   

  }

  }


function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    y = c*1+b*x+a*Math.pow(x,2);
    nx =  (w/2 -(i+1))/k ;
    ny =  c*1+b*nx+a*Math.pow(nx,2);
    
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.moveTo(w/2+x*k,h/2-y*k);
    ctx.lineTo(w/2+nx*k,h/2-ny*k);
    ctx.stroke();
  }















}