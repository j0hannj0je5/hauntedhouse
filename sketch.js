var floor1m,player,gflroom;
var hand1;
var groom;
var guroom;
var gameState=1;



function preload(){
  floor1m=loadImage("image/hhfloor1.jpeg")
  gfroom=loadImage("image/hhgroundflr.jpeg")
  hand1=loadImage("image/hand suspended.png")
  guroom=loadImage("image/guestroom.jpeg")
}

function setup() {
  createCanvas(800,400);
  hand1=createSprite(400, 200, 50, 50);
 groom=createSprite(50,50,100,100)
 groom.addImage(gfroom)
 groom.scale=0.2
 


}

function draw() {
  background("red"); 

  if (gameState===1){
    imageMode(CENTER)
 

  image(guroom,400,200,1600,400)
 if (keyDown(RIGHT_ARROW)){
   writePosition(10,0)
   groom.x=hand1.x-370
 }
 if (keyDown(LEFT_ARROW)){
 writePosition(-10,0)
 groom.x=hand1.x+370
 }
   //camera focus
   camera.position.y = height/2;
   camera.position.x = hand1.x

   console.log(hand1.x)

   if (hand1.x===0){
     var message1=createElement('H2');
     message1.html("THE GUEST ROOM HAS BEEN CLEARED. YOU HAVE OBTAINED A KEY.")
     message1.position(hand1.x,350)
     var button1 = createButton("NEXT ROOM")
     button1.position(350,300)

   button1.mousePressed(()=>{gameState=2})
     

   }
  }
   if (gameState===2){
    imageMode(CENTER)
 

  image(floor1m,400,200,1600,400)

  }






  drawSprites();
}
function writePosition(x, y){ hand1.x = hand1.x + x; hand1.y = hand1.y+y }
