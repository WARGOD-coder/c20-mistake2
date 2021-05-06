var cat,catimg1,catimg2,catanm1
var mouseimg1,mouse,mouseimg2,mouseanm1
var bgimg,background
function preload() {
    //load the images here
bgimg=loadImage("images/garden.png")
catimg1=loadImage("images/cat1.png")
catanm1=loadAnimation("images/cat2.png","images/cat3.png")
catimg2=loadAnimation("images/cat4.png")
mouseimg1=loadImage("images/mouse1.png")
mouseanm1=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseimg2=loadAnimation("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(850,700,10,10)
cat.addImage("catsitting",catimg1)
cat.addAnimation("catrunning",catanm1)
cat.addAnimation("catstill2",catimg2)


cat.scale=0.2
mouse=createSprite(250,700,10,10)
mouse.addImage("mousestanding",mouseimg1)
mouse.addAnimation("mousestill2",mouseimg2)
mouse.addAnimation("mousetease",mouseanm1)
mouse.scale=0.2

mouse.setCollider("rectangle",0,0,100,mouse.height)
cat.setCollider("rectangle",0,0,200,cat.height)

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width-mouse.width)/2){
    cat.changeAnimation("catstill2",catimg2)
    cat.velocityX=0
    mouse.changeAnimation("mousestill2",mouseimg2)
}
cat.debug=true
mouse.debug=true


drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
cat.changeAnimation("catrunning",catanm1)
cat.velocityX=-2
mouse.changeAnimation("mousetease",mouseanm1)

}

}
