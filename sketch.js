var mRect,fRect;
function setup() {
  createCanvas(400,400);
  mRect=createSprite(400, 200, 50, 80);
  fRect=createSprite(200,200,80,50);
  mRect.shapeColor="green";
  fRect.shapeColor="green";
  mRect.debug=true;
  fRect.debug=true;
  
  //(mRect.width+fRect.width)/2=65

}

function draw() {
  background(0);  
  mRect.x=mouseX;
  mRect.y=mouseY;
  console.log(mRect.x-fRect.x);
if(mRect.x-fRect.x<(mRect.width+fRect.width)/2 &&
fRect.x-mRect.x<(mRect.width+fRect.width)/2 && 
mRect.y-fRect.y<(mRect.height+fRect.height)/2 &&
fRect.y-mRect.y<(mRect.height+fRect.height)/2){
  mRect.shapeColor="red";
  fRect.shapeColor="red";

}
else{
  mRect.shapeColor="green";
  fRect.shapeColor="green";
}
  drawSprites();
}