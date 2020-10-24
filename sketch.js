//Create variables here
var dog,happyDog,foodS,foodStock;
function preload()
{
  //load images here
  dog1=loadImage("images/dogImg.png");
Happydog=loadImage("images/dogImg.png");

}

function setup() {
	
	
	
	
	
	database= firebase.database();

	
  createCanvas(600,600);

  
  dog = createSprite(300,400);
 dog.addImage(dog1);
 dog.scale=0.2

 foodStock = database.ref('food');
foodStock.on("value", readStock);
}
food=createButton


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(Happydog);
  
     }  
     textSize(20)
     stroke("black")
   text("press UP_ARROW key to feed Drago milk",50,25 );
   text("Food remaining"+foodS,250,100  )
;
fill("black");
stroke(90);   
  drawSprites();
  //add styles here
 
}
function readStock(data){
  
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  
  database.ref('/').update({
      food:x
  })
}



