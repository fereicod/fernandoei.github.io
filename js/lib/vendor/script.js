function repeat(str, num) {
  console.log(num);
  return (num > 1)? str + repeat(str, num-1) : '';
}
var paragraph = document.getElementById('render');
var button    = document.getElementById('btn');
var phrase    = "I'm testing BrowserSync and what it can do.";
button.addEventListener('click', function(e) {
  paragraph.textContent = repeat(phrase, 400);
});

var canvas = document.getElementById("canvas");
if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(200,0,0)";
  ctx.fillRect (10, 10, 55, 50);
  ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
  ctx.fillRect (30, 30, 55, 50);
  ctx.fillRect(25,25,100,100);
  ctx.clearRect(45,45,60,60);
  ctx.strokeRect(50,50,50,50);
  // Triángulo relleno
  ctx.beginPath();
  ctx.moveTo(25,25);
  ctx.lineTo(105,25);
  ctx.lineTo(25,105);
  ctx.closePath();
  ctx.fill();
  // Triángulo trazado
  ctx.beginPath();
  ctx.moveTo(125,125);
  ctx.lineTo(125,45);
  ctx.lineTo(45,125);
  ctx.closePath();
  ctx.stroke();
  for(var i=0;i<4;i++){
    for(var j=0;j<3;j++){
        ctx.beginPath();
        var x              = 25+j*50;       // coordenada x
        var y              = 25+i*50;       // coordenada y
        var radius         = 20;            // radio del arco
        var startAngle     = 0;             // punto inicial del círculo
        var endAngle       = Math.PI+(Math.PI*j)/2; // punto final
        var anticlockwise  = i%2==0 ? false : true;
        ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
        if (i>1){
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }
  }
  ctx.beginPath();
  ctx.arc(75,75,50,0,Math.PI*2,true);  // círculo exterior
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#FFF';
  ctx.beginPath();
  ctx.arc(75,75,35,0,Math.PI,false);   // boca (dextrógiro)
  ctx.closePath();
  ctx.fill();

  ctx.moveTo(65,65);
  ctx.beginPath();
  ctx.arc(60,65,5,0,Math.PI*2,true);  // ojo izquierdo
  ctx.closePath();
  ctx.fill();

  ctx.moveTo(95,65);
  ctx.beginPath();
  ctx.arc(90,65,5,0,Math.PI*2,true);  // ojo derecho
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.fillStyle = "#FFA500";
  ctx.fillStyle = "rgb(255,165,0)";
  ctx.fillStyle = "rgba(255,165,0,1)";

  function draw() {
      for (var i=0;i<6;i++){
          for (var j=0;j<6;j++){
              ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ','
                                      + Math.floor(255-42.5*j) + ',0)';
              ctx.fillRect(j*25,i*25,25,25);
          }
      }
  }

  function draw() {
      for (var i=0;i<6;i++){
          for (var j=0;j<6;j++){
              ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i)
                                          + ',' +  ath.floor(255-42.5*j) + ')';
              ctx.beginPath();
              ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
              ctx.stroke();
          }
      }
  }
}
