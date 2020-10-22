var canvas,backgroundImage;

var gameState=0,allplayers;

var playerCount,database,form,player,game;

var car1,car2,car3,car4 ;

var carA,car1image,car2image,car3image,car4image,ground,track;

function preload(){

car1image=loadImage("car1.png");

car2image=loadImage("car2.png");

car3image=loadImage("car3.png");

car4image=loadImage("car4.png");

track=loadImage("track.jpg");

ground=loadImage("ground.png");

}


function setup(){

    canvas=createCanvas(displayWidth-20,displayHeight-30);
    
    database=firebase.database();

    game=new Game();

    game.getState();

    game.start();
    
}

function draw(){

if (playerCount===4){

    game.update(1);

}

if (gameState===1){

    clear();

    game.play();

}

if (gameState===2){

    game.end();

}
}

