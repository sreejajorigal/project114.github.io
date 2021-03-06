nosex=0;
nosey=0;
function preload(){
    img=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")   
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-16;
        nosey=results[0].pose.nose.y+10;
    }
}
function modelLoaded(){
    console.log("poseNet is loaded");
}
function draw(){
    image(video,0,0,300,300);
    image(img,nosex,nosey,40,30);
}
function take_snapshot(){
    save("clownnose.png");
}