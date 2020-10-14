/* ---------------  Variables  --------------- */

var numI = 0;                       // interval step count
var oneStepE = [];                  // used to reduce earthship event to a single interval step
var oneStepA = [];                  // used to reduce alienship event to a single interval step
var sun;                            // central sun

var earthShip;                      // good guys
var earthShipAngle = 0;             // angle in radians earthShip is at when thrust is on
var earthShipLastAngle = 0;         // angle in radians earthShip is at when thrust is turned off
var torpedoE = [];                  // used to create earthship torpedoes
var numET = 0;                      // initial number of earthship torpedoes
var earthTorpedoes = [];            // array of photon torpodoes fired by earthShip

var alienShip;                      // bad guys
var alienShipAngle = 0;             // angle in radians alienShip is at when thrust is on
var alienShipLastAngle = 0;         // angle in radians alienShip is at when thrust is turned off
var torpedoA = [];                  // used to create alienship torpedoes
var numAT = 0;                      // initial number of alienship torpedoes
var alienTorpedoes = [];            // array of photon torpodoes fired by alienShip

var aFactor = 1.0;                  // factor used to increase/decrease ship rate of travel
var coast = false;                  // used to allow/disallow continued ship travel after thrust is turned off

var tFactor = 1.0;                  // factor used to increase/decrease torpedo rate of travel

/* -----------  Gameplay Functions  ---------- */

function startGame(){
    gameArea.start();
    sun = new MakeSun(450,465,"#fcf31c","miter");
    earthShip = new Spaceship(75,300,100,300,80,295,60,290,70,300,60,310,80,305,100,300,"#15eb46","miter",true);
    alienShip = new Spaceship(785,630,760,630,780,628,800,620,805,630,800,640,780,632,760,630,"#15eb46","round",true);
}

function updateGameArea(){
    gameArea.clear();
    
    //----------------------
    // Update Ship Positions
    //----------------------
    if ((earthShip.active) && (gameArea.keys) && (gameArea.keys[83])){
        earthShip.x += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x1 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x2 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x3 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x4 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x5 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x6 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.x7 += (Math.cos(earthShip.angle) * aFactor);
        earthShip.y += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y1 += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y2 += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y3 += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y4 += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y5 += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y6 += (Math.sin(earthShip.angle) * aFactor);
        earthShip.y7 += (Math.sin(earthShip.angle) * aFactor);
        earthShipAngle = earthShip.angle;
    } else if ((earthShip.active) && (gameArea.keys) && (coast == true)){
        earthShipLastAngle = earthShipAngle;
        earthShip.x += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x1 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x2 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x3 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x4 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x5 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x6 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.x7 += Math.cos(earthShipLastAngle) * aFactor;
        earthShip.y += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y1 += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y2 += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y3 += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y4 += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y5 += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y6 += Math.sin(earthShipLastAngle) * aFactor;
        earthShip.y7 += Math.sin(earthShipLastAngle) * aFactor;
    }  

    if ((alienShip.active) && (gameArea.keys) && (gameArea.keys[38])){
        alienShip.x -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x1 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x2 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x3 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x4 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x5 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x6 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.x7 -= (Math.cos(alienShip.angle) * aFactor);
        alienShip.y -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y1 -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y2 -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y3 -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y4 -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y5 -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y6 -= (Math.sin(alienShip.angle) * aFactor);
        alienShip.y7 -= (Math.sin(alienShip.angle) * aFactor);
        alienShipAngle = alienShip.angle;
    } else if ((alienShip.active) && (gameArea.keys) && (coast == true)){
        alienShipLastAngle = alienShipAngle;
        alienShip.x -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x1 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x2 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x3 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x4 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x5 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x6 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.x7 -= Math.cos(alienShipLastAngle) * aFactor;
        alienShip.y -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y1 -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y2 -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y3 -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y4 -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y5 -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y6 -= Math.sin(alienShipLastAngle) * aFactor;
        alienShip.y7 -= Math.sin(alienShipLastAngle) * aFactor;
    }  
    
    //----------------------
    // Update Ship Rotations
    //----------------------
    if ((earthShip.active) && (gameArea.keys) && (gameArea.keys[90])){earthShip.angle -= gameArea.angle;}
    if ((earthShip.active) && (gameArea.keys) && (gameArea.keys[88])){earthShip.angle += gameArea.angle;}
    if ((alienShip.active) && (gameArea.keys) && (gameArea.keys[37])){alienShip.angle -= gameArea.angle;}
    if ((alienShip.active) && (gameArea.keys) && (gameArea.keys[39])){alienShip.angle += gameArea.angle;}
    
    //----------------------
    // Update Sun Rotation
    //----------------------
    sun.angle += 1 / 180 * Math.PI;
    
    //---------------------------------
    // Update Photon Torpodoes Position
    //---------------------------------
    if ((gameArea.keys) && (gameArea.keys[67]) && ((oneStepE[0] == numI) || (oneStepE[2] == numI) || (oneStepE[18] == numI))){
    //if ((gameArea.keys) && (gameArea.keys[67]) && ((shootE == true))){
        torpedoE[numET] =  new MakeTorpedo(earthTorpedoes,earthShip.x,earthShip.y,2,earthShip.angle,true,"#fff");
        torpedoE[numET].addTorpedo();
        numET ++;
    }

    for (var i = 0; i < earthTorpedoes.length; i++){
        earthTorpedoes[i].x += 25 * Math.cos(earthTorpedoes[i].angle) * tFactor;
        earthTorpedoes[i].y += 25 * Math.sin(earthTorpedoes[i].angle) * tFactor;
        
        if(earthTorpedoes[i].active){
            var distToSun = distance(earthTorpedoes[i].x,earthTorpedoes[i].y, sun.x,sun.y);
            var distToShip = distance(earthTorpedoes[i].x,earthTorpedoes[i].y,alienShip.x,alienShip.y);
        }
        
        if(distToSun < 25){
            earthTorpedoes[i].active = false;
            earthTorpedoes[i].shift();
        }
        
        if(distToShip < 25){
            alienShip.active = false;
            alienShip.x1 += 2;
            alienShip.x2 += 1;
            alienShip.y2 -= 2;
            alienShip.x3 -= 1;
            alienShip.y3 -= 2;
            alienShip.x4 -= 2;
            alienShip.x5 -= 1;
            alienShip.y5 += 2;
            alienShip.x6 += 1;
            alienShip.y6 += 2;
            //alienShip.explode();
            earthTorpedoes[i].active = false;
            earthTorpedoes.shift();
        }
        
        torpedoE[i].update();
    }
    
    if ((gameArea.keys) && (gameArea.keys[45]) && ((oneStepA[0] == numI) || (oneStepA[2] == numI) || (oneStepA[18] == numI))){
    //if ((gameArea.keys) && (gameArea.keys[45])){
        torpedoA[numAT] =  new MakeTorpedo(alienTorpedoes,alienShip.x,alienShip.y,2,alienShip.angle,true,"#fff");
        torpedoA[numAT].addTorpedo();
        numAT ++;
    }

    for (var i = 0; i < alienTorpedoes.length; i++){
        alienTorpedoes[i].x -= 25 * Math.cos(alienTorpedoes[i].angle) * tFactor;
        alienTorpedoes[i].y -= 25 * Math.sin(alienTorpedoes[i].angle) * tFactor;
        
        if(alienTorpedoes[i].active){
            var distToSun = distance(alienTorpedoes[i].x,alienTorpedoes[i].y, sun.x,sun.y);
            var distToShip = distance(alienTorpedoes[i].x,alienTorpedoes[i].y,earthShip.x,earthShip.y);
        }
        
        if(distToSun < 25){
            alienTorpedoes[i].active = false;
            alienTorpedoes[i].shift();
        }
        
        if(distToShip < 25){
            earthShip.active = false;
            earthShip.x1 += 2;
            earthShip.x2 += 1;
            earthShip.y2 -= 2;
            earthShip.x3 -= 1;
            earthShip.y3 -= 2;
            earthShip.x4 -= 2;
            earthShip.x5 -= 1;
            earthShip.y5 += 2;
            earthShip.x6 += 1;
            earthShip.y6 += 2;
            //earthShip.explode();
            alienTorpedoes[i].active = false;
            alienTorpedoes.shift();
        }
        
        torpedoA[i].update();
    }    
    
    //------------------------
    // Activitate updates
    //------------------------
    sun.update();
    
    if (earthShip.active){
        earthShip.update();
        } else {
        earthShip.explode();
        }
    if (alienShip.active){
        alienShip.update();
        } else {
        alienShip.explode();
        }
    
    numI ++;
}

/* ---------  Constructor Functions  --------- */

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

function Spaceship(px,py,p1x,p1y,p2x,p2y,p3x,p3y,p4x,p4y,p5x,p5y,p6x,p6y,p7x,p7y,color,joint,active){
    this.angle = 0 / 180 * Math.PI; 
    this.accelX = Math.cos(gameArea.angle);
    this.accelY = Math.sin(gameArea.angle);
    this.residualX = 0;
    this.residualY = 0;
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
    this.colorE = "#f80c0c";
    this.joint = joint;
    this.active = active;
    this.radius = 3;
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
    this.explode = function(){
        c = gameArea.context;
        c.save();                     
        c.translate(this.x, this.y);  
        c.rotate(this.angle);  
        c.translate(-this.x, -this.y);; 
        c.beginPath();
        c.fillStyle = this.colorE;
        c.moveTo(this.x1,this.y1);
        c.arc(this.x1,this.y1,this.radius,0,Math.PI*2,false);
        c.arc(this.x2,this.y2,this.radius,0,Math.PI*2,false);
        c.arc(this.x3,this.y3,this.radius,0,Math.PI*2,false);
        c.arc(this.x4,this.y4,this.radius,0,Math.PI*2,false);
        c.arc(this.x5,this.y5,this.radius,0,Math.PI*2,false);
        c.arc(this.x6,this.y6,this.radius,0,Math.PI*2,false);
        c.fill();
        c.closePath();
        c.setTransform(1,0,0,1,0,0);
    }
}

function MakeTorpedo(ship,x,y,radius,angle,active,color){
    this.ship = ship;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angle = angle;
    this.active = active;
    this.color = color;
    this.tFire = numI;
    
    this.addTorpedo = function(){
        this.ship.push(this);
    }
    
    this.update = function(){
        c = gameArea.context;
        c.save();                     
        c.translate(this.x, this.y);  
        c.rotate(this.angle);  
        c.translate(-this.x, -this.y);; 
        c.beginPath();
        c.fillStyle = this.color;
        c.moveTo(this.x,this.y);
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fill();
        c.closePath();
        c.setTransform(1,0,0,1,0,0);
    }
}

/* ------------- Other Functions ------------- */

function distance(shipX,shipY,targetX,targetY){
    return Math.sqrt(Math.pow((targetY - shipY),2) + Math.pow((targetX - shipX),2));
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
        gameArea.index = numI;
        if(gameArea.keys[67]){  // this defines an earthship shooting event
          oneStepE.push(numI);
        }
        if(gameArea.keys[45]){  // this defines an alienship shooting event
          oneStepA.push(numI);  
        }
      })
      window.addEventListener('keyup', function (e) {
        gameArea.keys[e.keyCode] = false;
        gameArea.angle = 0;
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