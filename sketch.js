var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var loobyimg;
var sound1;
var ai;
var lo;
var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img,Desert,iceage,Nobita;

function preload(){
  track = loadImage("images/track.jpg");
  car2_img = loadImage("images/car1.png")
  city = loadImage("images/BG 3.jpg");
  garden = loadImage("images/BG 5.jpg");
  Darkgarden = loadImage("images/BG 7.jpg");
  Desert = loadImage("images/BG 6.jpg");
  iceage = loadImage("images/BG 4.jpg");
  Nobita = loadImage("images/Nobita2.png");
  sizuka = loadImage("images/Sizuka.png");
  suneo = loadImage("images/suneo.png");
  takeshi = loadImage("images/Takeshi.png");
  d = loadImage("images/D1.png");
  loobyimg = loadImage("images/BG 8.jpg");
  ai = loadImage("images/AI.png");
  startimg = loadImage("images/BG 12.png");
  i = loadImage("images/BG 9.png");
  sound2= loadSound("images/Doraemon Piano Song.mp3");
  sound1= loadSound("images/Doraemon Piano Song.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    
  }
  if(gameState === 2){
    clear();
    game.playWithAI();
  }
  if(gameState === 3){
    //end
  }
}
