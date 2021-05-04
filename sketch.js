 const Engine = Matter.Engine,
  const World = Matter.World,
  const Body = Matter.Body,
  const Bodies = Matter.Bodies;
 
var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function preload(){

}

function setup(){
  createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies here;

  ground = new Ground (440,690,800,20);

  //ball1 = new Particle(200,200,10);
  //ball2 = new Particle(200,210,10);
  //ball3 = new Particle(200,220,10);
  //ball4 = new Praticle(200,230,10);
  //ball5 = new Particle(200,240,10);
  //ball6 = new Particle(200,250,10);
  
for(var i=0; i<width; i=i+80){
 divisions.push(new Division(i,height-divisionheight/2,10,divisionheight)); 
}

for(var j=75; j<=width; j=j+50){
 plinkos.push(new Plinko(j,75)); 
}

for(var j=50; j<=width-10; j=j+50){
  plinkos.push(new Plinko(j,175));
}

for(var j=75; j<=width; j=j+50){
 plinkos.push(new Pinko(j=275)); 
}

for(var j=50; j<=width; j=j+50){};
plinkos.push(new Plinko(j,375));
}

//for()

Engine.run(engine);


function draw(){
  rectMode(CENTER);
  background(0);

  drawSprites();
}

for(var n=0; n<divisions,lenght; n+1){
 division[n].display(); 
}
if(frameCount %60 === 0){
 practicle.push(new Practicle(random[width/2-30, width/2+30],10,10)); 
}

for(var h=0; h<practicle.lenght; h++){
 practicles[h].display(); 
}

for(var j=0; j<plinkos.lenght; j++){
 plinkos[j].display(); 
}
