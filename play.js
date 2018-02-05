// when window loads, a canvas will be created

window.onload = function() {

               var canvas = document.getElementById("canvas"),

                               ctx = canvas.getContext("2d"),

                               width = canvas.width = window.innerWidth,

                               height = canvas.height = window.innerHeight;
                               ctx.moveTo(0,0);
                               ctx.lineTo(200,100);
                               ctx.stroke();
                              

                              

               // trying to add a gradient effect to the lines

               var gradient=ctx.createLinearGradient(0,0,170,0)

               gradient.addColorStop("0","red");

               gradient.addColorStop("0.5","black");

               gradient.addColorStop("1","green");

               ctx.lineWidth=5

 

               // originally we just filled the rect            

               // context.fillRect(0,0,width,height);

               // random lines drawn (100 of them)

               for(var i=0; i<100; i+=1){

                               ctx.beginPath();

                               ctx.moveTo(Math.random()*width, Math.random()*height);

                               ctx.lineTo(Math.random()*100, Math.random()*100);

                               ctx.strokeStyle=gradient;

                               ctx.stroke();

               }  // end for loop
               ctx.fillStyle = "#FF0000";
               ctx.fillRect(0,0,150,75);
                              

};  // end onload function