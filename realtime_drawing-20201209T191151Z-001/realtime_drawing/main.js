function setup(){
    video = createCapture(VIDEO);
    video.size(550.500);
    canvas = createCanvas(500,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);

}
noseX=0;
noseY=0;
leftWristX = 0;
rightWristX = 0;
difference = 0;


function modelLoaded(){
    console.log("poseNet is initiallised");
    
}

function gotPoses(results){
    if(results.length > 0){console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = "+noseX+"nosey = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX = "+leftWristX+"rightWristX = "+rightWristX+"difference = "+differnce);

    }
}

function draw(){
    background("#969A97");
    document.getElementById("square_side").innerHTML="width and height = "+difference+"px";
  fill("#F90093");
  stroke("#F90093");
  square(noseX,noseY,difference);
    
}