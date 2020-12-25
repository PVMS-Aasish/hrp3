var harrypotter,harrypotterImg;
var form,game,player;
var database;
var gameState=0;
var playerCount;
var title,titleImg;
var bg1,bg1Img;
var support1,support2;

function preload(){

    harrypotterImg= loadImage("hpf.png")
    titleImg = loadImage("title.png");
    bg1Img=loadImage("background1.jpg")

}

function setup(){
createCanvas(900,900);

bg1 = createSprite(500,500,1000,1000);
bg1.addImage("bg1",bg1Img);
bg1.scale=1.5;

database = firebase.database();
game = new Game();
game.getState();
game.start();



harrypotter=createSprite(120,400,50,50);
harrypotter.addImage("harrypotter",harrypotterImg)
harrypotter.velocityY=1;

support1=createSprite(120,510,20,20);
support2=createSprite(120,250,20,20);
support1.visible=false;
support2.visible=false;

title=createSprite(400,150,50,50);
title.addImage("title",titleImg)


}
function draw(){
//background(bg1Img);

createEdgeSprites();

  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }

  harrypotter.bounceOff(support1);
  harrypotter.bounceOff(support2);

  

drawSprites();
}