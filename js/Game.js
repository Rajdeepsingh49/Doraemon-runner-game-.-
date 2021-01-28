class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,600);
    //car1.addImage("car1",car1_img);
    car2 = createSprite(100,600);
    //car2.velocityX=6;
    car2.addImage(ai);
    cars = [car1, car2];

  }

  /*play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getCarsAtEnd();
    
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
      Player.updateCarsAtEnd(player.rank)
    }
   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank);
  }*/
  playWithAI(name,distance){
    background("red");
    var ref = database.ref("players/player1/distance");
    var d;
     ref.on("value",(data)=>{
       d = data.val();
    })

    var ref1 = database.ref("players/player1/track");
     var t;
     ref1.on("value",(data)=>{
        t = data.val();
    })

   // alert("Start the game");
   // console.log("distance " +distance);
    if(t==="DESERT"){
       console.log("2");
        background(Desert,width,height);
    }

    if(t==="ICE AGE"){
        
        background(iceage,displayWidth*5,displayHeight);
    }

    if(t==="GARDEN"){
        background(garden,displayWidth,displayHeight);
    }
    
    if(t==="DARK GARDEN"){
      background(Darkgarden,displayWidth,displayHeight);
    }

    if(t==="SUNSET IN THE CITY"){
      background(city,displayWidth,displayHeight);
    }
      
      
      var ref2 = database.ref("players/player1/name");
        var v;
        ref2.on("value",(data)=>{
          v = data.val();
        });

      if(v==="Nobita"){
        car1.addImage("car1",Nobita);
      }
      
      if(v==="Sizuka"){
        car1.addImage("car1",sizuka);
      }
      
      if(v==="Doraemon"){
        car1.addImage("car1",d);
      }

      if(v==="Suneo"){
        car1.addImage("car1",suneo);
      }

      if(v==="Takeshi"){
        car1.addImage("car1",takeshi);
      }

      
      car1.scale = 0.2;
      car1.x = d;
      car1.y = 600;
      console.log("car1.x : "+car1.x);
      camera.position.x = d;
      camera.position.y = displayHeight/2;
      console.log("d:"+d);
      
      car2.scale=0.3;
      car2.velocityX=5;
      if(keyIsDown(RIGHT_ARROW)){
        console.log("in right");
         player.index=1;
         player.distance=player.distance+10;
         player.update();
      }
       
      

      drawSprites();

  }
}
