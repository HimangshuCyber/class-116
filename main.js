var nose_x = 0; //The nose x coordinate
var nose_y = 0; //The nose y coordinate

function preload(){
    image_link = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup(){
    canvas = createCanvas(600,400);
    canvas.center(); //Center the canvas
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide(); //Hides the ugly extra codes of video in p5js

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Model Loaded!'); //Confirms that the model is in action
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x -25; //Updates the x coordinate
        nose_y = results[0].pose.nose.y -20; //Updates the y coordinate
        console.log("The nose's x coordinate is " + nose_x); //Prints the x coordinate
        console.log("The nose's y coordinate is " + nose_y); //Prints the y coordinate
    }
}

function draw(){
    image(video, 0, 0, 600, 400); //Displays the video
    image(image_link, nose_x, nose_y, 50, 40);
    /*fill(255, 0, 0);
    circle(nose_x, nose_y, 40);
    stroke(34, 27, 100) */
}

function take_snap(){
    save('filtered_image.png'); //Saves the image
}