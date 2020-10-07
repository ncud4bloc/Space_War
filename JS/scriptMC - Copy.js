/* ---------------  Variables  --------------- */

var earthShip;
var alienShip;

/* ---------------  Functions  --------------- */

function startGame(){
    gameArea.start();
    earthShip = new Spaceship(100,300,80,295,60,290,70,300,60,310,80,305,100,300,"#15eb46","miter");
    alienShip = new Spaceship(660,300,680,298,700,290,700,300,700,310,680,302,660,300,"#15eb46","round");
}

function Spaceship(p1x,p1y,p2x,p2y,p3x,p3y,p4x,p4y,p5x,p5y,p6x,p6y,p7x,p7y,color,joint){
    this.x1 = p1x;
    this.y1 = p1y;
    this.x2 = p2x;
    this.y2 = p2y;
    this.x3 = p3x;
    this.y3 = p3y;
    this.x4 = p4x;
    this.y4 = p4y;
    this.x5 = p5x;
    this.y5 = p5y;
    this.x6 = p6x;
    this.y6 = p6y;
    this.x7 = p7x;
    this.y7 = p7y;
    this.update = function(){
      c = gameArea.context;
      c.lineWidth = 2;
      c.lineJoin = joint;
      c.moveTo(this.x1, this.y1);
      c.lineTo(this.x2, this.y2);
      c.lineTo(this.x3, this.y3);
      c.lineTo(this.x4, this.y4);
      c.lineTo(this.x5, this.y5);
      c.lineTo(this.x6, this.y6);
      c.lineTo(this.x7, this.y7);
      c.strokeStyle = color;
      c.stroke(); 
      //c.closePath();
    }   
}

function updateGameArea(){
    gameArea.clear();
    
    // Temporary translations to confirm it works
    earthShip.x1 += 1;
    earthShip.x2 += 1;
    earthShip.x3 += 1;
    earthShip.x4 += 1;
    earthShip.x5 += 1;
    earthShip.x6 += 1;
    earthShip.x7 += 1;
    alienShip.x1 -= 1;
    alienShip.x2 -= 1;
    alienShip.x3 -= 1;
    alienShip.x4 -= 1;
    alienShip.x5 -= 1;
    alienShip.x6 -= 1;
    alienShip.x7 -= 1;
    // End Temporary translations
    
    earthShip.update();
    alienShip.update();
}



/* ---------------   Objects   --------------- */

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 800;
      this.canvas.height = 600;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea,20);
    },
    clear : function(){
      this.canvas.width = 800;
      this.canvas.height = 600;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


startGame();