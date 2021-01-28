class Form{
  constructor(){
    this.character = createSelect("CHOOSE CHARACTER");
    this.character.option("CHOOSE CHARACTER");
    this.character.option("Nobita");
    this.character.option("Sizuka");
    this.character.option("Doraemon");
    this.character.option("Suneo");
    this.character.option("Takeshi");
   this.backgroundtrack = createSelect("CHOOSE BACKGROUND");
   this.backgroundtrack.option("CHOOSE BACKGROUND");
      this.backgroundtrack.option("DESERT");
      this.backgroundtrack.option("ICE AGE");
      this.backgroundtrack.option("SUNSET IN THE CITY");
      this.backgroundtrack.option("GARDEN");
      this.backgroundtrack.option("DARK GARDEN");
   

   
    this.setting = createButton("SETTING");
      this.mute = createButton("MUTE SONG");
      this.unmute = createButton("UNMUTE SONG");
      this.liveRace = createButton("LIVE RACE");
      this.racewithai = createButton("RACE WITH AI");
      //this.back = createButton("BACK");
      this.back2 = createButton("BACK");
      this.button = createButton("START");
      this.title = createElement('h2');
      this.title1 = createElement('h3'); 
      this.title2 = createElement('h4'); 
      this.title3 = createElement('h5');
      this.title4 = createElement('h6');
  }
  hide(){
    this.character.hide();
    this.backgroundtrack.hide();
    this.liveRace.hide();
    this.racewithai.hide();
  }
  display(){
          background("orange");
          background(startimg,width,height);
          sound1.loop();
          this.title.html("WELCOME TO YOUR LOOBY");
          this.title.position(300, 10);
          this.title.style('font-size', '70px');
          this.title.style('color', 'yellow');
          this.title.hide();
          
          this.title1.html("WELCOME GAMER");
          this.title1.position(60, 110);
          this.title1.style('font-size', '70px');
          this.title1.style('color', 'red');
 
          this.title2.html("PLEASE CLICK ON START");
          this.title2.position(80, 190);
          this.title2.style('font-size', '50px');
          this.title2.style('color', 'red');
          
          this.title3.html("PLEASE SELECT YOUR SETTING");
          this.title3.position(200, 10);
          this.title3.style('font-size', '70px');
          this.title3.style('color', 'yellow');
          this.title3.hide();

          this.title4.html("GAME IS COMPLETED");
          this.title4.position(300, 10);
          this.title4.style('font-size', '70px');
          this.title4.style('color', 'yellow');
          this.title4.hide();

          this.button.position(width-1230,height-400);
          this.button.style('width', '200px');
          this.button.style('height', '50px');
          this.button.style('background', 'yellow');
           
          this.mute.position(width-860,height-500);
          this.mute.style('width', '200px');
          this.mute.style('height', '40px');
          this.mute.style('background', 'orange');
          this.mute.hide();

          this.unmute.position(width-860,height-600);
          this.unmute.style('width', '200px');
          this.unmute.style('height', '40px');
          this.unmute.style('background', 'orange');
          this.unmute.hide();

          this.setting.position(width-350,height/2+200);
          this.setting.style('width', '200px');
          this.setting.style('height', '40px');
          this.setting.style('background', 'orange');
          this.setting.hide();

          this.character.position(1169,210);
          this.character.style('width', '200px');
          this.character.style('height', '40px');
          this.character.style('background', 'orange');
          this.character.hide();

          this.backgroundtrack.position(width-350,height/2-100);
          this.backgroundtrack.style('width', '200px');
          this.backgroundtrack.style('height', '40px');
          this.backgroundtrack.style('background', 'orange');
          this.backgroundtrack.hide();

          this.back2.position(width-100,height-750);
          this.back2.style('width', '70px');
          this.back2.style('height', '40px');
          this.back2.style('background', 'orange');
          this.back2.hide();
          
          this.liveRace.position(width-350,height/2);
          this.liveRace.style('width', '200px');
          this.liveRace.style('height', '40px');
          this.liveRace.style('background', 'orange');
          this.liveRace.hide();

          this.racewithai.position(width-350,height/2+100);
          this.racewithai.style('width', '200px');
          this.racewithai.style('height', '40px');
          this.racewithai.style('background', 'orange');
          this.racewithai.hide();
          

         /* this.back.position(width-150,height-100);
          this.back.style('width', '100px');
          this.back.style('height', '40px');
          this.back.style('background', 'orange');
          this.back.hide();
          this.liveRace.mousePressed(()=>{
              console.log("Check8");
              this.character.hide();
              this.backgroundtrack.hide();
              this.liveRace.hide();
              this.racewithai.hide();
              this.back2.show();
              this.title.hide();
              background("white");
          }) */

          this.racewithai.mousePressed(()=>{
              console.log("Check7");
              this.character.hide();
              this.backgroundtrack.hide();
              this.liveRace.hide();
              this.racewithai.hide();
              this.back2.show();
              this.title.hide();
              this.setting.hide();
                
                player.name = this.character.value();
                player.track = this.backgroundtrack.value();
                playerCount=1;
                player.index = playerCount;
                distance
                player.update();
                player.updateCount(playerCount);
                game.update(2);
            
          }) 

          /*this.back.mousePressed(()=>{
              console.log("Check10");
              this.character.show();
              this.backgroundtrack.show();
              this.liveRace.show();
              this.racewithai.show();
              this.back.hide();
              this.title.show();
              background(loobyimg,width,height);
             
          }) 
             */
            this.back2.mousePressed(()=>{
              console.log("Check11");
              this.character.show();
              this.backgroundtrack.show();
              this.liveRace.show();
              this.racewithai.show();
              this.title.show();
              this.back2.hide();
              this.title3.hide();
              this.mute.hide();
              this.unmute.hide();
              this.setting.show();
              player.updateCount(0);
              game.update(0);
              background(loobyimg,width,height);
            
        })

        this.button.mousePressed(()=>{
          console.log("Check");
          this.racewithai.show();
          this.title.show();
          this.title1.hide();
          this.title2.hide();
          this.character.show();
          this.backgroundtrack.show();
          this.setting.show();
          background(loobyimg,width,height);
          this.button.hide();
          this.liveRace.show();
      })

      this.setting.mousePressed(()=>{
        console.log("Check");
        this.racewithai.hide();
        this.title.hide();
        this.character.hide();
        this.backgroundtrack.hide();
        this.setting.hide();
        this.title3.show();
        this.back2.show();
        this.mute.show();
        this.unmute.show();
        background(i,width,height);
        this.liveRace.hide();
    })
    
      this.mute.mousePressed(()=>{
        sound1.stop();
    })

      this.unmute.mousePressed(()=>{
        sound1.loop();
  })

      if(player.distance>4100){
        this.title4.show();
        background(i,width,height);
        
      } 

  }
}