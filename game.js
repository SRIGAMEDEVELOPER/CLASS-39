class Game{

    constructor(){

    }

    getState(){

        var gameStateref=database.ref('gameState');

        gameStateref.on("value",function(data){

            gameState=data.val();

        })
    }

    update(state){

        database.ref('/').update({

            gameState:state

        })

    }

    start(){

        if(gameState===0){

            player=new Player();

            player.getCount();

            form=new Form();

            form.display();

        }

        car1=createSprite(100,200,100,100);

        car1.addImage(car1image);

        car2=createSprite(300,200,100,100);

        car2.addImage(car2image);

        car3=createSprite(500,200,100,100);

        car3.addImage(car3image);

        car4=createSprite(700,200,100,100);

        car4.addImage(car4image);

        carA=[car1,car2,car3,car4];
    }

   play(){

        form.hide();

        //textSize(30);

       // text("Game Starts",120,100);

        Player.getplayerinformation();

        if (allplayers!==undefined){
           
            background(ground);

            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

           // var displayposition=130;

           var index=0;

           var x=240;

           var y;

            for (var plr in allplayers){

                index=index+1;

                x=x+220;

                y=displayHeight-allplayers[plr].distance;

                carA[index-1].x=x;

                carA[index-1].y=y;

                if (index===player.index){

               carA[index-1].shapeColor="red";

               stroke(10);

               fill("red");

               ellipse(x,y,60,60);

               camera.position.x=displayWidth/2;

               camera.position.y=carA[index-1].y;

                }

                //displayposition+=20;

                //textSize(15);

                //text(allplayers[plr].name+":"+allplayers[plr].distance,120,displayposition);

            }

        }

        if (keyDown(UP_ARROW)&&player.index!==null){

            player.distance+=50;

            player.update();

        }

            if(player.distance>4150){

                gameState=2;

                           }

        drawSprites();
    }
    
    end(){

        console.log("Game Ended");

    }

}
