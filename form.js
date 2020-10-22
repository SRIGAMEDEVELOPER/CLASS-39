class Form{

    constructor(){

        this.input=createInput("Name");

        this.button=createButton('play');

        this.greeting=createElement('h2');

        this.reset=createButton('Reset');

        this.resetdistance=createButton('Reset scores');

    }

    display(){

        var title=createElement('h2');

        title.html("Car Racing Game");

        title.position(displayWidth/2-50,0);
        
        this.input.position(displayWidth/2-40,displayHeight/5-60);
        
        this.button.position(displayWidth/2+30,displayHeight/5);

        this.reset.position(displayWidth-100,20);

        this.resetdistance.position(displayWidth-50,20);

        this.button.mousePressed(()=>{

            this.input.hide();

            this.button.hide();

             player.name=this.input.value();

            playerCount=playerCount+1;

            player.index=playerCount;

            player.update();

            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name);

            this.greeting.position(displayWidth/2-70,displayHeight/4);

        }

        )
        this.reset.mousePressed(()=>{

            player.updateCount(0);

            game.update(0);

            

            
            

        })

        this.resetdistance.mousePressed(()=>{

            car1.y=200;      

            car2.y=200;        

            car3.y=200;

            car4.y=200;

            database.ref("players/player1").update({

                distance:0

            });
            database.ref("players/player2").update({

                distance:0

            });
            database.ref("players/player3").update({

                distance:0

            });
            database.ref("players/player4").update({

                distance:0

            });
    
        })
        
}


hide(){

    this.greeting.hide();

    this.button.hide();

    this.input.hide();

}



}