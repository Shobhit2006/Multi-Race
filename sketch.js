var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var silver,gold,bronze;
var form, player, game;
var carSound;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
  gold = loadImage("../images/gold.png");
  silver = loadImage("../images/silver.png");
  bronze = loadImage("../images/bronze.png");
  racebg = loadImage("../images/racebg.jpg");
  carSound = loadSound("/images/car.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  background(racebg);
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
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  if(gameState===2 && player.rank===4){
    console.log("display Rank");
    background(racebg);
    game.displayRank();
        }
}
