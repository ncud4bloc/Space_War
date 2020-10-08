/* ---------------  Variables  --------------- */

var numI = 0;   // interval step count
var sun;
var earthShip;
var alienShip;

/* ---------------  Functions  --------------- */

function startGame(){
    gameArea.start();
    sun = new MakeSun(450,465,"#fcf31c","miter");
    earthShip = new Spaceship(75,300,100,300,80,295,60,290,70,300,60,310,80,305,100,300,"#15eb46","miter");
    alienShip = new Spaceship(790,630,760,630,780,628,800,620,805,630,800,640,780,632,760,630,"#ffffff","round");
}

function updateGameArea(){
    gameArea.clear();
    
    //earthShip.addThrust();
    //alienShip.addThrust();

    // Temporary translations to confirm it works
    earthShip.x1 += 0;
    earthShip.x2 += 0;
    earthShip.x3 += 0;
    earthShip.x4 += 0;
    earthShip.x5 += 0;
    earthShip.x6 += 0;
    earthShip.x7 += 0;

    alienShip.x1 -= 0;
    alienShip.x2 -= 0;
    alienShip.x3 -= 0;
    alienShip.x4 -= 0;
    alienShip.x5 -= 0;
    alienShip.x6 -= 0;
    alienShip.x7 -= 0;
    // End Temporary translations
    //
    
    sun.angle += 1 / 180 * Math.PI;
    
    if ((gameArea.keys) && (gameArea.keys[90])){earthShip.angle -= 2 / 180 * Math.PI;}
    if ((gameArea.keys) && (gameArea.keys[88])){earthShip.angle += 2 / 180 * Math.PI;}
    if ((gameArea.keys) && (gameArea.keys[37])){alienShip.angle -= 2 / 180 * Math.PI;}
    if ((gameArea.keys) && (gameArea.keys[12])){alienShip.angle += 2 / 180 * Math.PI;}
    
    sun.update();
    earthShip.update();
    alienShip.update();
    
    numI += 1;
}

function MakeSun(sx,sy,color,joint){
    this.angle = 0 / 180 * Math.PI;
    this.x = sx;
    this.y = sy;
    this.x1 = sx;
    this.y1 = sy-20;
    this.x2 = sx+5;
    this.y2 = sy-5;
    this.x3 = sx+20;
    this.y3 = sy;
    this.x4 = sx+5;
    this.y4 = sy+5;
    this.x5 = sx;
    this.y5 = sy+20;
    this.x6 = sx-5;
    this.y6 = sy+5;
    this.x7 = sx-20;
    this.y7 = sy;
    this.x8 = sx-5;
    this.y8 = sy-5;
    this.update = function(){
      c = gameArea.context;
      c.save();
      c.translate(this.x, this.y);
      c.rotate(-this.angle);
      c.translate(-this.x, -this.y);
      c.lineWidth = 2;
      c.lineJoin = joint;
      c.moveTo(this.x1, this.y1);
      c.lineTo(this.x2, this.y2);
      c.lineTo(this.x3, this.y3);
      c.lineTo(this.x4, this.y4);
      c.lineTo(this.x5, this.y5);
      c.lineTo(this.x6, this.y6);
      c.lineTo(this.x7, this.y7);
      c.lineTo(this.x8, this.y8);
      c.lineTo(this.x1, this.y1);
      c.lineTo(this.x2, this.y2);
      c.strokeStyle = color;
      c.stroke(); 
      c.setTransform(1,0,0,1,0,0);
    }   
}

function Spaceship(px,py,p1x,p1y,p2x,p2y,p3x,p3y,p4x,p4y,p5x,p5y,p6x,p6y,p7x,p7y,color,joint){
    this.angle = 0 / 180 * Math.PI; 
    //this.accelX = cos(this.angle);
    //this.accelY = sin(this.angle);
    this.x = px;
    this.y = py;
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
      c.save();                     
      c.translate(this.x, this.y);  
      c.rotate(this.angle);          
      c.translate(-this.x, -this.y); 
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
      c.setTransform(1,0,0,1,0,0);   
    }   
    this.addThrust = function(){
        this.x += this.accelX;
        this.y += this.accelY;
        this.x1 += this.accelX;
        this.y1 += this.accelY;
        this.x2 += this.accelX;
        this.y2 += this.accelY;
        this.x3 += this.accelX;
        this.y3 += this.accelY;
        this.x4 += this.accelX;
        this.y4 += this.accelY;
        this.x5 += this.accelX;
        this.y5 += this.accelY;
        this.x6 += this.accelX;
        this.y6 += this.accelY;
        this.x7 += this.accelX;
        this.y7 += this.accelY;
    }
}


/* ---------------   Objects   --------------- */

var gameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.width = 900;
      this.canvas.height = 930;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea,20);
      window.addEventListener('keydown', function (e) {
        gameArea.keys = (gameArea.keys || []);
        gameArea.keys[e.keyCode] = true;
      })
      window.addEventListener('keyup', function (e) {
        gameArea.keys[e.keyCode] = false;
      })
    },
    clear : function(){
      this.canvas.width = 900;
      this.canvas.height = 930;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


startGame();