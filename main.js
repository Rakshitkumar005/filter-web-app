noseX="";
noseY="";

function preload(){
mostache_img=loadImage("https://i.postimg.cc/y6tpMmcs/mostache.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center()
video=createCapture(VIDEO);
video.size(300,300)
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
image(video,0,0,300,300)
image(mostache_img,noseX,noseY,80,35);
console.log(mostache_img);
}
function takeSnapshot(){
    save("image.png")
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}
function gotPoses(results){
    if(results.length>0){
   noseX=results[0].pose.nose.x -40;
   noseY=results[0].pose.nose.y;
   console.log(noseX);
   console.log(noseY);
    }
}