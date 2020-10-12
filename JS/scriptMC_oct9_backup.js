/* ---------------  Variables  --------------- */

var numI = 0;   // interval step count
var sun;
var earthShip;
var alienShip;
var earthShipLastAngle = 0;
var alienShipLastAngle = 0;

/* ---------------  Functions  --------------- */

function startGame(){
    gameArea.start();
    sun = new MakeSun(450,465,"#fcf31c","miter");
    earthShip = new Spaceship(75,300,100,300,80,295,60,290,70,300,60,310,80,305,100,300,"#15eb46","miter");
    alienShip = new Spaceship(790,630,760,630,780,628,800,620,805,630,800,640,780,632,760,630,"#15eb46","round");
}

function updateGameArea(){
    gameArea.clear();
    
    if ((gameArea.keys) && (gameArea.keys[83])){
        earthShip.x += Math.cos(earthShip.angle);
        earthShip.x1 += Math.cos(earthShip.angle);
        earthShip.x2 += Math.cos(earthShip.angle);
        earthShip.x3 += Math.cos(earthShip.angle);
        earthShip.x4 += Math.cos(earthShip.angle);
        earthShip.x5 += Math.cos(earthShip.angle);
        earthShip.x6 += Math.cos(earthShip.angle);
        earthShip.x7 += Math.cos(earthShip.angle);
        earthShip.y += Math.sin(earthShip.angle);
        earthShip.y1 += Math.sin(earthShip.angle);
        earthShip.y2 += Math.sin(earthShip.angle);
        earthShip.y3 += Math.sin(earthShip.angle);
        earthShip.y4 += Math.sin(earthShip.angle);
        earthShip.y5 += Math.sin(earthShip.angle);
        earthShip.y6 += Math.sin(earthShip.angle);
        earthShip.y7 += Math.sin(earthShip.angle);
        earthShipLastAngle = earthShip.angle;
    } else { //if (gameArea.keys){
        earthShip.x += Math.cos(earthShipLastAngle);
        earthShip.x1 += Math.cos(earthShipLastAngle);
        earthShip.x2 += Math.cos(earthShipLastAngle);
        earthShip.x3 += Math.cos(earthShipLastAngle);
        earthShip.x4 += Math.cos(earthShipLastAngle);
        earthShip.x5 += Math.cos(earthShipLastAngle);
        earthShip.x6 += Math.cos(earthShipLastAngle);
        earthShip.x7 += Math.cos(earthShipLastAngle);
        earthShip.y += Math.sin(earthShipLastAngle);
        earthShip.y1 += Math.sin(earthShipLastAngle);
        earthShip.y2 += Math.sin(earthShipLastAngle);
        earthShip.y3 += Math.sin(earthShipLastAngle);
        earthShip.y4 += Math.sin(earthShipLastAngle);
        earthShip.y5 += Math.sin(earthShipLastAngle);
        earthShip.y6 += Math.sin(earthShipLastAngle);
        earthShip.y7 += Math.sin(earthShipLastAngle);  
    }

    if ((gameArea.keys) && (gameArea.keys[38])){
        alienShip.x -= Math.cos(alienShip.angle);
        alienShip.x1 -= Math.cos(alienShip.angle);
        alienShip.x2 -= Math.cos(alienShip.angle);
        alienShip.x3 -= Math.cos(alienShip.angle);
        alienShip.x4 -= Math.cos(alienShip.angle);
        alienShip.x5 -= Math.cos(alienShip.angle);
        alienShip.x6 -= Math.cos(alienShip.angle);
        alienShip.x7 -= Math.cos(alienShip.angle);
        alienShip.y -= Math.sin(alienShip.angle);
        alienShip.y1 -= Math.sin(alienShip.angle);
        alienShip.y2 -= Math.sin(alienShip.angle);
        alienShip.y3 -= Math.sin(alienShip.angle);
        alienShip.y4 -= Math.sin(alienShip.angle);
        alienShip.y5 -= Math.sin(alienShip.angle);
        alienShip.y6 -= Math.sin(alienShip.angle);
        alienShip.y7 -= Math.sin(alienShip.angle);
    }
    
    sun.angle += 1 / 180 * Math.PI;
    
    if ((gameArea.keys) && (gameArea.keys[90])){earthShip.angle -= gameArea.angle;}
    if ((gameArea.keys) && (gameArea.keys[88])){earthShip.angle += gameArea.angle;}
    if ((gameArea.keys) && (gameArea.keys[37])){alienShip.angle -= gameArea.angle;}
    if ((gameArea.keys) && (gameArea.keys[12])){alienShip.angle += gameArea.angle;}
    
    sun.update();
    earthShip.update();
    //maintainSpeed(earthShip);
    alienShip.update();
    //maintainSpeed(alienShip);
    
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
    this.color = color;
    this.joint = joint;
    this.update = function(){
      c = gameArea.context;
      c.save();
      c.translate(this.x, this.y);
      c.rotate(-this.angle);
      c.translate(-this.x, -this.y);
      c.lineWidth = 2;
      c.strokeStyle = this.color;
      c.lineJoin = this.joint;
      c.beginPath();
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
      c.stroke(); 
      c.closePath();
      c.setTransform(1,0,0,1,0,0);
    }   
}

function Spaceship(px,py,p1x,p1y,p2x,p2y,p3x,p3y,p4x,p4y,p5x,p5y,p6x,p6y,p7x,p7y,color,joint){
    this.angle = 0 / 180 * Math.PI; 
    this.accelX = Math.cos(gameArea.angle);
    this.accelY = Math.sin(gameArea.angle);
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
    this.color = color;
    this.joint = joint;
    this.update = function(){
      c = gameArea.context;
      c.save();                     
      c.translate(this.x, this.y);  
      c.rotate(this.angle);  
      c.translate(-this.x, -this.y);; 
      c.lineWidth = 2;
      c.strokeStyle = this.color;
      c.lineJoin = this.joint;
      c.beginPath();
      c.moveTo(this.x1, this.y1);
      c.lineTo(this.x2, this.y2);
      c.lineTo(this.x3, this.y3);
      c.lineTo(this.x4, this.y4);
      c.lineTo(this.x5, this.y5);
      c.lineTo(this.x6, this.y6);
      c.lineTo(this.x7, this.y7);
      c.stroke(); 
      c.closePath();
      c.setTransform(1,0,0,1,0,0);   
    }   
}

function maintainSpeed(ship){
        this.angle = ship.angle;
    //console.log('Ship angle = ' + this.angle * 180 / Math.PI + ' degrees.');
        this.x = ship.x;
        this.x1 = ship.x1;
        this.x2 = ship.x2;
        this.x3 = ship.x3;
        this.x4 = ship.x4;
        this.x5 = ship.x5;
        this.x6 = ship.x6;
        this.x7 = ship.x7;
        this.y = ship.y;
        this.y1 = ship.y1;
        this.y2 = ship.y2;
        this.y3 = ship.y3;
        this.y4 = ship.y4;
        this.y5 = ship.y5;
        this.y6 = ship.y6;
        this.y7 = ship.y7;   
        this.x += Math.cos(this.angle);
        this.x1 += Math.cos(this.angle);
        this.x2 += Math.cos(this.angle);
        this.x3 += Math.cos(this.angle);
        this.x4 += Math.cos(this.angle);
        this.x5 += Math.cos(this.angle);
        this.x6 += Math.cos(this.angle);
        this.x7 += Math.cos(this.angle);
        this.y += Math.sin(this.angle);
        this.y1 += Math.sin(this.angle);
        this.y2 += Math.sin(this.angle);
        this.y3 += Math.sin(this.angle);
        this.y4 += Math.sin(this.angle);
        this.y5 += Math.sin(this.angle);
        this.y6 += Math.sin(this.angle);
        this.y7 += Math.sin(this.angle);
    //console.log('Ship position = ' + this.x + 'x ' + this.y + 'y');
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
        gameArea.angle = 2 / 180 * Math.PI;
      })
      window.addEventListener('keyup', function (e) {
        gameArea.keys[e.keyCode] = false;
        gameArea.angle = 0;
      })     
/*      window.addEventListener('keyup', function (e) {
          if((gameArea.keys[83]) || (gameArea.keys[38])){
              gameArea.keys[e.keyCode] = true;
          } else {
              gameArea.keys[e.keyCode] = false;
          }
      }) */      
    },
    clear : function(){
      this.canvas.width = 900;
      this.canvas.height = 930;
      this.context = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


startGame();