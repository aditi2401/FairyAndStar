var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 550);

	// fairyVoice.play();

	fairy = createSprite(130, 400);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.20;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(starBody.position.y > 380){
	Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {
	//write code here
	console.log("KEY PRESSED");
	if (keyCode === 37){
		console.log("KEY PRESSED LEFT");
		fairy.x = fairy.x - 5;
	}
	if (keyCode === 39){
		console.log("KEY PRESSED RIGHT");
		fairy.x = fairy.x + 5;
	}
	if (keyCode === 40){
		console.log("KEY PRESSED DOWN");
		Matter.Body.setStatic(starBody,false);
		console.log(starBody.isStatic);
	}
}
